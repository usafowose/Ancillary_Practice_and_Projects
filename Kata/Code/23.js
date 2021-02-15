const isIsogram = str => {
  const reduced = [...str].reduce((acc, cv, i, arr) => {
    return acc.indexOf(cv.toUpperCase()) === -1 ? [...acc, cv.toUpperCase()] : [...acc, false]
  }, [])
  console.log(reduced);
  
  return reduced.indexOf(false) !== -1 ? false: true; 
  }

  console.log(isIsogram("Dermatooglyphics"))