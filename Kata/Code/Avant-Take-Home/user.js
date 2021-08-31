"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var account_1 = require("./account");
var Customer = /** @class */ (function () {
    function Customer(name, _myAccount) {
        var _this = this;
        this._myAccount = _myAccount;
        this._getPayments = function () {
            return _this._myAccount.statement.payments;
        };
        this._getCharges = function () {
            return _this._myAccount.statement.charges;
        };
        this._getStatement = function () {
            return _this._myAccount.statement;
        };
        this._chargeAccount = function (amount) {
            return _this._myAccount.charge(amount);
        };
        this._makePayment = function (amount) {
            return _this._myAccount.pay(amount);
        };
        this._getOutstandingBalance = function () {
            return _this._myAccount.outstandingBalance;
        };
        this._incrementDay = function (days) {
            return _this._myAccount.incrementDay(days);
        };
        this.testRun = function () {
            console.log(_this._getOutstandingBalance()); // 0
            console.log(_this._makePayment(20)); // should return error and not change balance
            console.log(_this._getOutstandingBalance()); // 0
            console.log(_this._chargeAccount(500)); // nothing
            console.log(_this._getOutstandingBalance()); // 500
            console.log(_this._incrementDay(15)); // 15
            _this._makePayment(200); // nothing
            console.log(_this._getOutstandingBalance()); //300
            console.log(_this._getStatement()); //statement
            console.log(_this._incrementDay(10)); // 25
            _this._chargeAccount(100);
            console.log(_this._getOutstandingBalance()); // 400
            console.log(_this._incrementDay(5));
            console.log(_this._getStatement());
            console.log(_this._getOutstandingBalance()); // 411.99
        };
        this.testRun2 = function () {
            console.log(_this._chargeAccount(500)); // nothing
            console.log(_this._getOutstandingBalance()); // 500
            console.log(_this._incrementDay(30)); // 30
            console.log(_this._getOutstandingBalance());
        };
    }
    return Customer;
}());
exports.Customer = Customer;
var Andrew = new Customer("Andrew", new account_1.Account(35, 1000));
Andrew.testRun2();
Andrew.testRun();
