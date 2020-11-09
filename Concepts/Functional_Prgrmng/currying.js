const stephCurry = name => profession => team => age => rings => favTeammate => console.log(`${name} is a professional ${profession} who plays for the ${team}. He is ${age} years old and has won ${rings} rings. His partner in crime is ${favTeammate}`);

const sayProfession = stephCurry('Steph Curry')

const whatTeam = sayProfession('Basketball Player')

const howOld = whatTeam('Golden State Warriors')

const championships = howOld(30);

const favTeammate = championships(4);

const complete = favTeammate('Klay Thompson')

//Nothing is logged to the console until this last function has been called which provides the final argv to the curry. 

// BELOW IS THE SAME AS ABOVE

stephCurry('KD')('baller')('Brooklyn Nets')(28)(2)('Kyrie')

// ABOVE IS THE SAME AS BELOW 

const sameAsAbove = (name, profession, team, age, rings, favTeammate) => console.log(`${name} is a professional ${profession} who plays for the ${team}. He is ${age} years old and has won ${rings} rings. His partner in crime is ${favTeammate}`)

sameAsAbove('Steph', 'hooper', 'GSW', 32, 5, 'Draymond'); 