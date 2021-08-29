// 1. Each card has an APR and Credit Limit.
// 2. Interest is calculated daily, starting the day after the account is opened, at the close of each day.
// 3. Calculated interest becomes due at the close every 30 days after the account has been opened.
// e.g., asking for the total outstanding balance 15, 28, or 29 days after opening will give the outstanding balance, but asking for balance 30 days after opening will give the outstanding balance plus the accrued interest.

// The software should be able to:
// * Create an account (e.g. opening a new credit card)
// * Keep track of charges (e.g. card swipes)
// * Keep track of payments
// * Provide the total outstanding balance as of any given day

// Test Scenario 1
// A customer opens a credit card with a $1, 000.00 limit at a 35 % APR.
// The customer charges $500 on opening day (outstanding balance becomes $500).
// The total outstanding balance owed 30 days after opening should be $514.38.
// 500 * (0.35 / 365) * 30 = 14.38

// Test Scenario 2
// A customer opens a credit card with a $1, 000.00 limit at a 35 % APR.
// The customer charges $500 on opening day(outstanding balance becomes $500).
// 15 days after opening, the customer pays $200(outstanding balance becomes $300).
// 25 days after opening, the customer charges another $100(outstanding balance becomes $400).
// The total outstanding balance owed 30 days after opening should be $411.99.
// (500 * 0.35 / 365 * 15) + (300 * 0.35 / 365 * 10) + (400 * 0.35 / 365 * 5) = 11.99


// class Account
// private member var day -> (changes)
// private member var interest -> (changes, starts day after account opening date)
// private member var balance -> (changes, can be requested @ any time)
// constructor(APR, limit) {this.dailyInterestRate = APR / 36500}
// private member methods 
// pay()
// swipe()
// incrementDay(): void
// updateEODInterest;
// interest becomes due after 30 days -> when day = 30, interest is due (added to bill)
// interest is calculated daily regardless
// user can ask for total outstanding balance anytime. balance requested any time before 30 days is just balance, else balance + interest;
// --------------must-haves------------
// ability to create an account
// keep track of charges
// keep track of payments
// provide balance at any given day

export class Account {
    private _day: number;
    private _accruedInterest: number;
    private _outstandingBalance: number;
    private _dailyInterestRate: number;
    constructor(apr: number, private _limit: number) {
        this._day = 0;
        this._dailyInterestRate = apr / 36500;
        this._accruedInterest = 0;
        this._outstandingBalance = 0;
    }

    public get accruedInterest() {
        return this._accruedInterest;
    }

    public get outstandingBalance() {
        return this._day < 30 ? this._outstandingBalance : this._outstandingBalance + this._accruedInterest;
    }

    public set outstandingBalance(balance: number) {
        this._outstandingBalance = balance;
    }

    public pay = (amount: number): void => {
        // 
    }

    private _charge = (amount: number): void => {
        if (this._validateCharge(amount)) {
            this.outstandingBalance += amount;
        }
    }

    private _incrementDay = (): void => {
        this._day++;
        this._updateEODInterest();
    }

    private _updateEODInterest = (): void => {
        // UPDATE ACCRUED INTEREST VARIABLE HERE
    }

    private _validateCharge = (amount: number): boolean => {
        return this.outstandingBalance + amount <= this._limit ? true : false;
    }

    private _validatePayment = (amount: number): boolean => {
        return this.outstandingBalance - amount >= 0 ? true : false;
    }
}
