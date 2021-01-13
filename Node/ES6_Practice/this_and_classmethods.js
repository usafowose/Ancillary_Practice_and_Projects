var person = {
    name: "Andrew",
    age: 23,
    job: "Software Engineer",
    weight: 250, 
    changeName: function(newName) {
        this.name = newName;
    }, 
    newBirthday: function() {
        this.age++
    }, 
    changeOccupation: function(newJob) {
        this.job = newJob;
    }, 
    loseWeight: function(pounds) {
        this.weight-=pounds; 
    }, 
    printInfo: function () {
        console.log(this); 
    }
}



person.changeName('Oluwanifemi');
person.newBirthday(); 
person.changeOccupation('Senior Software Engineer'); 
person.loseWeight(45); 
person.printInfo(); 
