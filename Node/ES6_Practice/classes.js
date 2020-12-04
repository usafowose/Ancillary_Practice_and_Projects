class Organism {
    constructor (type = 'mammal', age = 1) {
        this.type = type; 
        this.age = age;
        this.breathing = true; 
    }
     die() {
        console.log(`The ${this.type} died at age: ${this.age} and is no longer breathing`);
        this.age = null; 
        this.breathing = false; 
     }  

     morph(newType = 'Amphibian') {
         console.log(`The ${this.type} has now morphed into ${newType}`);
     }
     yell() {
         console.log('I am YELLING')
     }
}


class Human extends Organism {
    constructor(name = 'John Doe', type, age){
        super (type, age); 
        this.name = name;
    }

    introduce() {
        console.log(`I am ${this.name}`); 
    }

    dieDifferently() {
        console.log('I am not my ancestor')
    }

    morph(newHumanType) {
        super.morph(newHumanType);
    }
}

var studentOne = new Human('Andrew', 'compassionate', 23 ); 
const { introduce, dieDifferently } = studentOne;
console.log(studentOne.introduce(), dieDifferently());

console.log(studentOne.die(), studentOne.dieDifferently())
console.log(studentOne.morph('dictator'))
// var Human = new Organism('mammal', 25); 

// Human.die();

// Human.morph('Reptile'); 