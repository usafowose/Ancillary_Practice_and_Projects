function formatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(`{${index}}`, val[index]);
    }
    return str;
}

function round(number: number, decimals?: number) {
    decimals = decimals ? decimals : 0;
    if (number[number.toString().length - 1] >= 5) {
        return (Math.ceil(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
    } else {
        return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
}

export interface AccountLog {
    [key: string]: number[];
}

export interface Statement {
    charges: AccountLog;
    payments: AccountLog;
}

export enum TransactionError {
    CREDITLIMIT = "Charge was declined due to insufficient credit",
    BALANCEPAID = "Payment exceeds balance. Payment must be ${0} or less"
}

export class Account {
    private _day: number = 0;
    private _accruedInterest: number = 0;
    private _outstandingBalance: number = 0;
    private _statement: Statement = {
        charges: {},
        payments: {}
    };
    private _dailyInterestRate: number;
    constructor(apr: number, private _limit: number) {
        this._dailyInterestRate = apr / 36500;
    }

    public get statement() {
        return this._statement;
    }

    public get outstandingBalance() {
        return this._day < 30 ? round(this._outstandingBalance, 2) : round(this._outstandingBalance + this._accruedInterest, 2);
    }

    public set outstandingBalance(balance: number) {
        this._outstandingBalance = balance;
    }

    public pay = (amount: number): void | string => {
        if (amount < 0) {
            this.charge(amount);
        }

        var { _day, statement, _validatePayment } = this;
        if (_validatePayment(amount)) {
            const todaysPayments = statement.payments[_day];
            this.outstandingBalance -= amount;

            if (!todaysPayments) {
                statement.payments[_day] = [amount];
            } else {
                this.statement.payments[this._day] = [...this.statement.payments[this._day], amount];
            }
        } else {
            return formatString(TransactionError.BALANCEPAID.toString(), `${this.outstandingBalance}`);
        }
    }

    public charge = (amount: number): void | string => {
        if (amount < 0) {
            this.pay(amount);
        }

        if (this._validateCharge(amount)) {
            this.outstandingBalance += amount;

            if (!this.statement.charges[this._day]) {
                this.statement.charges[this._day] = [amount];
            } else {
                this.statement.charges[this._day] = [...this.statement.charges[this._day], amount];
            }
        } else {
            return TransactionError.CREDITLIMIT.toString();
        }
    }

    public incrementDay = (days?: number): number | string => {
        if (!days) {
            days = 1;
        }

        if (this._day === 30) {
            const monthsEndOutstanding = this.outstandingBalance;
            this._day = 0;
            this._outstandingBalance = 0;
            this._accruedInterest = 0;
            this._statement = {
                charges: {},
                payments: {}
            };
            return `Statement Due: ${monthsEndOutstanding}`;
        }

        if (this._day + days <= 30) {
            this._day += days;
            this._updateAccruedInterest();
        } else if (this._day + days > 30) {
            const daysTillStatement = 30 - this._day;
            this.incrementDay(daysTillStatement);
        }

        return this._day;
    }

    private _updateAccruedInterest = (): void => {
        const { _outstandingBalance, _dailyInterestRate, statement: { charges, payments } } = this;
        const daysAccrued = this._day - [...Object.keys(charges), ...Object.keys(payments)].map(cv => Number(cv)).sort((a, b) => b - a)[0];
        this._accruedInterest += _outstandingBalance * _dailyInterestRate * daysAccrued;
    }

    private _validateCharge = (amount: number): boolean => {
        return this.outstandingBalance + amount <= this._limit ? true : false;
    }

    private _validatePayment = (amount: number): boolean => {
        return this.outstandingBalance - amount >= 0 ? true : false;
    }
}
