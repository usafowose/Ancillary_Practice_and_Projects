const fs = require('fs');
const { parse } = require('path');

class Transactions {
    total() {
        fs.createReadStream("./bank.txt", { encoding: "utf-8" }).on('data', (data) => {
            data = (data.split(","));
            let total = 0;
            for (var i = 0; i < data.length; i++) {
                total += parseFloat(data[i]);
            }
            console.log(`You currently have a total of $${total.toFixed(2)}`);
        })
    };
    deposit(amount) {
        amount = parseFloat(process.argv[3]).toFixed(2);
        let stream = fs.createWriteStream("./bank.txt", { flags: "a" });
        stream.write(`, ${amount}`);
    }

    withdraw(amount) {
        amount = parseFloat(process.argv[3]).toFixed(2);
        let stream = fs.createWriteStream("./bank.txt", { flags: "a" });
        stream.write(`, ${-amount}`);
        console.log(`You have withdrawn ${amount} dollars from your account.`);
    }
    lotto() {
        let random = Math.floor((Math.random() * 10) + 3);
        console.log(random);
        if (random === 3) {
            var stream = fs.createWriteStream("./bank.txt", { flags: "a" });
            stream.write(`, 1000000 `)
            console.log(`You're a millionaire! Check your account`)
        } else { console.log(`You have better chances becoming president`) };
    }
}

module.exports = Transactions; 