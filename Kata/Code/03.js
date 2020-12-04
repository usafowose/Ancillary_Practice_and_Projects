
function createCheckDigit(membershipId) {
   const addedFirst = () =>  console.log((membershipId.split(". ").reduce((current, next) => current + next))); 
//    const addedNext = (numbers) =>  (numbers.reduce((current, next) => current + next))
//    return addedFirst(membershipId)[1] ? addedNext(addedFirst(membershipId)) : addedFirst(membershipId)
        return addedFirst();
  }
  
  console.log(createCheckDigit("55555"));

//   ADD all digits of mem id
// if res has two dig, then add each digit of res. i.e 54 = 2dig= 9; 
// if (99), 9+9 =18; then add again =9 
