import { Account } from "./account";

interface AccountLog {
    [key: string]: number;
}

interface Statement {
    charges: AccountLog;
    payments: AccountLog;
}
class User {
    private _statement: Statement;
    private _myAccount: Account;
    constructor(name: string, apr: number, limit: number) {
        this._myAccount = new Account(apr, limit);
    }

    public get statement() {
        return this._statement; //maybe move this to account
    }

    private _getPayments = (): AccountLog => {
        return this._statement.payments;
    }

    private _getCharges = (): AccountLog => {
        return this._statement.charges;
    }

    private _chargeAccount = (amount: number): void => {
        this._myAccount.pay(amount);
    }

    private _makePayment = (amount: number): void => {

    }

    private _getOutstandingBalance = (): number => {
        return this._myAccount.outstandingBalance;
    }

    private _dayOver = (): void => {
    }
}

let me = new User("Andrew", 5, 5);
