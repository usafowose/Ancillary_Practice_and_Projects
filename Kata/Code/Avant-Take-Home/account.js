"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Account = exports.TransactionError = void 0;
function formatString(str) {
    var val = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        val[_i - 1] = arguments[_i];
    }
    for (var index = 0; index < val.length; index++) {
        str = str.replace("{" + index + "}", val[index]);
    }
    return str;
}
function round(number, decimals) {
    decimals = decimals ? decimals : 0;
    if (number[number.toString().length - 1] >= 5) {
        return (Math.ceil(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
    else {
        return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
}
var TransactionError;
(function (TransactionError) {
    TransactionError["CREDITLIMIT"] = "Charge was declined due to insufficient credit";
    TransactionError["BALANCEPAID"] = "Payment exceeds balance. Payment must be ${0} or less";
})(TransactionError = exports.TransactionError || (exports.TransactionError = {}));
var Account = /** @class */ (function () {
    function Account(apr, _limit) {
        var _this = this;
        this._limit = _limit;
        this._day = 0;
        this._accruedInterest = 0;
        this._outstandingBalance = 0;
        this._statement = {
            charges: {},
            payments: {}
        };
        this.pay = function (amount) {
            if (amount < 0) {
                _this.charge(amount);
            }
            var _a = _this, _day = _a._day, statement = _a.statement, _validatePayment = _a._validatePayment;
            if (_validatePayment(amount)) {
                var todaysPayments = statement.payments[_day];
                _this.outstandingBalance -= amount;
                if (!todaysPayments) {
                    statement.payments[_day] = [amount];
                }
                else {
                    _this.statement.payments[_this._day] = __spreadArray(__spreadArray([], _this.statement.payments[_this._day], true), [amount], false);
                }
            }
            else {
                return formatString(TransactionError.BALANCEPAID.toString(), "" + _this.outstandingBalance);
            }
        };
        this.charge = function (amount) {
            if (amount < 0) {
                _this.pay(amount);
            }
            if (_this._validateCharge(amount)) {
                _this.outstandingBalance += amount;
                if (!_this.statement.charges[_this._day]) {
                    _this.statement.charges[_this._day] = [amount];
                }
                else {
                    _this.statement.charges[_this._day] = __spreadArray(__spreadArray([], _this.statement.charges[_this._day], true), [amount], false);
                }
            }
            else {
                return TransactionError.CREDITLIMIT.toString();
            }
        };
        this.incrementDay = function (days) {
            if (!days) {
                days = 1;
            }
            if (_this._day === 30) {
                var monthsEndOutstanding = _this.outstandingBalance;
                _this._day = 0;
                _this._outstandingBalance = 0;
                _this._accruedInterest = 0;
                _this._statement = {
                    charges: {},
                    payments: {}
                };
                return "Statement Due: " + monthsEndOutstanding;
            }
            if (_this._day + days <= 30) {
                _this._day += days;
                _this._updateAccruedInterest();
            }
            else if (_this._day + days > 30) {
                var daysTillStatement = 30 - _this._day;
                _this.incrementDay(daysTillStatement);
            }
            return _this._day;
        };
        this._updateAccruedInterest = function () {
            var _a = _this, _outstandingBalance = _a._outstandingBalance, _dailyInterestRate = _a._dailyInterestRate, _b = _a.statement, charges = _b.charges, payments = _b.payments;
            var daysAccrued = _this._day - __spreadArray(__spreadArray([], Object.keys(charges), true), Object.keys(payments), true).map(function (cv) { return Number(cv); }).sort(function (a, b) { return b - a; })[0];
            _this._accruedInterest += _outstandingBalance * _dailyInterestRate * daysAccrued;
        };
        this._validateCharge = function (amount) {
            return _this.outstandingBalance + amount <= _this._limit ? true : false;
        };
        this._validatePayment = function (amount) {
            return _this.outstandingBalance - amount >= 0 ? true : false;
        };
        this._dailyInterestRate = apr / 36500;
    }
    Object.defineProperty(Account.prototype, "statement", {
        get: function () {
            return this._statement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "outstandingBalance", {
        get: function () {
            return this._day < 30 ? round(this._outstandingBalance, 2) : round(this._outstandingBalance + this._accruedInterest, 2);
        },
        set: function (balance) {
            this._outstandingBalance = balance;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
