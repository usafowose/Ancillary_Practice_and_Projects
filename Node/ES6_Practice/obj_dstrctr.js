const plant = {
    color: 'green',
    height_ft: 65,
    name: 'Palm Tree',
    water: true
}

var { height_ft, name } = plant

var routine = ({ water }) => {
    water ? console.log('Water the plant') : console.log('Dont water, only move to sunlight')
};

routine(plant)


const student = {
    name: 'Drew',
    gpa: 3.5,
    favSport: 'Football',
    graduate() {
        return `${this.name} is all done with school and graduated with a ${this.gpa}`
    },
    goToLunch() {
        return `It is time for ${this.name}'s lunch `
    }
};

const studentSUmmary = ({ graduate, goToLunch }) => console.log(graduate)


studentSUmmary(student); 
