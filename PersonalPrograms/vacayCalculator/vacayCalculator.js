// App Objective is to be able to Tabulate How Much Is Due Each Person out of a Group of People Going on Vacation


// Should Take In Total Shared Cost of Services, and Object of People and Nights of Services Used e.g. calc(cost, obj) where cost is in dollars and obj is like {Andrew : 4, Queen: 5, Jalen: 2}

// Should Output Total Cost Per Person

// Example : 
// Total Cost = 1000 / 5 nights
// People Obj = {Andrew: 5, Queen: 5, Jalen: 2, Roland: 3}  

// $200/night
// Night 1: {Drew: 100, Queen: 100}
// Night 2: {Drew: 100, Queen: 100}
// Night 3: {Drew, 66.67, Queen: 66.67, Roland: 66.67}
// Night 4: {Drew: 50, Queen: 50, Roland: 50, Jalen: 50}
// Night 5: {Drew: 50, Queen: 50, Roland: 50, Jalen: 50}


// Output: {Drew: 366.67, Queen: 366.67, Roland: 166.67, Jalen: 100}

// 

// 5nights/1ppl = 5 nights
// 5nights/1ppl = 5 nights
// 3nights/1ppl = 3 night
// 2nights/1ppl = 2 nights

// 15nights/4ppl 


// Drew staying 5 nights pays 5/15 of cost 
// Queen staying 5 nights pays 5/15 of cost
// Jalen Staying 3 Nights pays 3/15 of cost
// Roland Staying 2 nights pays 2/15 of cost

// 100/2000 = 10% --Jalen ... How? (Math-wise)

// 4people = 20 nights
// 5 = 1/4 of nights
// 3 = 3/20 of nights
// 5 = 1/4 of nights
// 2 = 1/10 of nights

const itinerary = {
  Drew: 5,
  Jalen: 3,
  Queen: 5,
  Roland: 2,
}
// 
const perNight = (totalCost, nights) => totalCost / nights

const numberOfGuests = Object.keys(itinerary).length

console.log(numberOfGuests)

console.log(perNight(1000, 5))

const calculateStay = (itinerary = {}, perNightCost) => {
  let nightly = perNightCost;

}


