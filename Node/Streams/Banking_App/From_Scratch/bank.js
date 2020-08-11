var Transactions = require('./transactions');

var transact = new Transactions;

var action = process.argv[2];
var amount = process.argv[3];

switch (action) {
    case ("total"):
        transact.total()
        break;

    case ("deposit"):
        transact.deposit(amount)
        transact.total()
        break;

    case ("withdraw"):
        transact.withdraw(amount)
        transact.total()
        break;

    case ("lotto"):
        transact.lotto()
        transact.total();
        break;
}