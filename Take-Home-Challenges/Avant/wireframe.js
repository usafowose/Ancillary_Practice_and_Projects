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
// The customer charges $500 on opening day(outstanding balance becomes $500).
// The total outstanding balance owed 30 days after opening should be $514.38.
// 500 * (0.35 / 365) * 30 = 14.38

// Test Scenario 2
// A customer opens a credit card with a $1, 000.00 limit at a 35 % APR.
// The customer charges $500 on opening day(outstanding balance becomes $500).
// 15 days after opening, the customer pays $200(outstanding balance becomes $300).
// 25 days after opening, the customer charges another $100(outstanding balance becomes $400).
// The total outstanding balance owed 30 days after opening should be $411.99.
// (500 * 0.35 / 365 * 15) + (300 * 0.35 / 365 * 10) + (400 * 0.35 / 365 * 5) = 11.99

class Card {

    constructor(limit = 0, apr = 0) {
        this.startingBalance = limit;
        this.dailyAPR = apr / 100 / 365;
        this.transactions = [];
        this.currentBalance = 0
    }

    logCharge = (daysAfterOpened, charge) => {
        this.transactions.push({ [daysAfterOpened]: -charge })
        // console.log(this.transactions)
    }

    logPayment = (daysAfterOpened, amount) => {
        this.transactions.push({ [daysAfterOpened]: amount })
        // console.log(this.transactions)
    }

    getOutstandingBalance = (daysAfterOpened = 29) => {
        return daysAfterOpened < 30 ? this.startingBalance + this.transactions.reduce((acc, cv) => acc + cv[Object.keys(cv)], 0) : this.getEndofMonthBalance()
    }

    chargeCard = (daysAfterOpened, charge) => {
        this.logCharge(daysAfterOpened, charge)
        this.currentBalance = this.getOutstandingBalance(0)
        return ` Balance: ${this.currentBalance}`
    }

    makePayment = (daysAfterOpened, amount) => {
        this.logPayment(daysAfterOpened, amount)
        this.currentBalance = this.getOutstandingBalance(0)
        // return `Balance: ${this.currentBalance}`
    }

    printStatement = () => this.transactions;


    getEndOfMonthBalance = () => {
        // Calculate Total Accrued Interest 
        // Add up All Interest and Add to Current Outstanding Balance Before Interest Calc.
    }

    currentInterestAccrued = (daysAfterOpened) => {
        let interestLog = [];

        interestLog.push(this.startingBalance - (this.startingBalance + this.transactions.reduce((acc, cv) => acc + cv[Object.keys(cv)], 0) * (this.dailyAPR * daysAfterOpened)))
        return interestLog;
    }

    getEndOfDayTransactions = () => {
        let dailySummary = {};
        let dailySummArr = [];

        this.transactions.forEach((obj, i, arr) => {
            if (dailySummary.hasOwnProperty([Object.keys(obj)])) {
                dailySummary[Object.keys(obj)] = dailySummary[Object.keys(obj)] + obj[Object.keys(obj)]
            } else {
                dailySummary[Object.keys(obj)] = obj[Object.keys(obj)]
            }
        });

        for (let day in dailySummary) {
            dailySummArr.push({ [day]: dailySummary[day] })
        };

        return dailySummArr;

    }
    // Retreive balance after day changes
    randomFunc = () => {
        let days = this.transactions.map(cv => [...Object.keys(cv)])
        let arrayofDays = [].concat(...days).filter((cv, i, arr) => arr.indexOf(cv) === i)
        // return arrayofDays;
    }
}



let John = new Card(1000, 35);
console.log(John.chargeCard(0, 500))
console.log(John.chargeCard(0, 300))
console.log(John.printStatement())
console.log(John.chargeCard(2, 100))
console.log(John.makePayment(3, 720))
console.log(John.printStatement())
console.log(John.chargeCard(3, 50))
console.log(John.makePayment(4, 25))
console.log(John.printStatement())
console.log(John.makePayment(14, 265))
console.log(John.makePayment(14, -65))
console.log(John.printStatement())


console.log(John.currentInterestAccrued(2))

console.log(John.getEndOfDayTransactions())

// console.log(John.randomFunc())



