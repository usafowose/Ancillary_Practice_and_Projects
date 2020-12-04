class Passenger {
    constructor(name, seat = 15, destination) {
        this.name = name;
        this.seat = seat;
        this.destination = destination
    }
    getSeat() {
        return (`Thanks for flying Delta. You are in seat ${this.seat}C`)
    };

    useRestroom() {
        return (`The restrooms are right behind`);
    }

    getFood() {
        return {
            type: 'snack',
            seatNum: `${this.seat}C`
        }
    }
}

class First extends Passenger {
    constructor(name, seat = 1, destination, favFood) {
        super(name, seat, destination);
        this.favFood = favFood
    }

    introduce() {
        return (`Hello, ${this.name} We will be guiding you all the way to ${this.destination}`)
    }

    useRestroom() {
        return (`The restrooms are right here behind the cockpit. Feel free, ${this.name}`);
    }

    getFood() {
        return {
            type: 'meal',
            meal: this.favFood,
            seatNum: this.seat
        }
    }
}

const pass1 = new Passenger('Andrew', 22, 'Miami');

const firstPass1 = new First('Andrew', 1, 'Atlanta', 'Caviar')

// const {getFood, getSeat} = pass1; 

console.log(pass1.getFood());
console.log(firstPass1.getFood());

console.log(pass1.useRestroom());
console.log(firstPass1.useRestroom()); 