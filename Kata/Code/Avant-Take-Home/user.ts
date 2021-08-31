import { Account, AccountLog, Statement } from "./account";

export class Customer {
    constructor(name: string, private _myAccount: Account) { }

    private _getPayments = (): AccountLog => {
        return this._myAccount.statement.payments;
    }

    private _getCharges = (): AccountLog => {
        return this._myAccount.statement.charges;
    }

    private _getStatement = (): Statement => {
        return this._myAccount.statement;
    }

    private _chargeAccount = (amount: number): void | string => {
        return this._myAccount.charge(amount);
    }

    private _makePayment = (amount: number): void | string => {
        return this._myAccount.pay(amount);
    }

    private _getOutstandingBalance = (): number => {
        return this._myAccount.outstandingBalance;
    }

    private _incrementDay = (days: number): number | string => {
        return this._myAccount.incrementDay(days);
    }

    public testRun = (): void => {
        console.log(this._getOutstandingBalance()); // 0
        console.log(this._makePayment(20)); // should return error and not change balance
        console.log(this._getOutstandingBalance()); // 0
        console.log(this._chargeAccount(500)); // nothing
        console.log(this._getOutstandingBalance()); // 500
        console.log(this._incrementDay(15)); // 15
        this._makePayment(200); // nothing
        console.log(this._getOutstandingBalance()); //300
        console.log(this._getStatement()); //statement
        console.log(this._incrementDay(10)); // 25
        this._chargeAccount(100);
        console.log(this._getOutstandingBalance()); // 400
        console.log(this._incrementDay(5));
        console.log(this._getStatement());
        console.log(this._getOutstandingBalance()); // 411.99
    }

    public testRun2 = (): void => {
        console.log(this._chargeAccount(500)); // nothing
        console.log(this._getOutstandingBalance()); // 500
        console.log(this._incrementDay(30)); // 30
        console.log(this._getOutstandingBalance());
    }
}

const Andrew = new Customer("Andrew", new Account(35, 1000));
Andrew.testRun2();
Andrew.testRun();
