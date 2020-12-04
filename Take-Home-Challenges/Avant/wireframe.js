// 1. Each card has an APR and Credit Limit.
// 2. Interest is calculated daily, starting the day after the account is opened, at the close of each day.
// 3. Calculated interest becomes due at the close every 30 days after the account has been opened.
// e.g., asking for the total outstanding balance 15, 28, or 29 days after opening will give the outstanding balance, but asking for balance 30 days after opening will give the outstanding balance plus the accrued interest.

let apr;
let creditLimit;
let daysAfterOpened = 0;
let accruedInterest;
let interestRate;
let currentOutstanding;
let totalBalance = currentBalance + accruedInterest;

daysAfterOpened < 30 ? totalBalance : totalBalance + accruedInterest
const card = (apr, cL) => `apr is ${apr} and credit limit is ${cL}`

// The software should be able to:

// * Create an account (e.g. opening a new credit card)
// * Keep track of charges (e.g. card swipes)
// * Keep track of payments
// * Provide the total outstanding balance as of any given day



class NewAccount {
    constructor(limit, apr) {
        this.currentBalance = limit
        this.apr = apr / 100
    }

    currentInterest(cBalance, daysAfterOpened) {
        return this.limit * (this.apr / 365) * daysAfterOpened
    }

    chargeCard(cBalance, charge, daysAfterOpened) {
        let currentBalance = (cBalance - charge)
        return (cBalance - charge)
    }
}

