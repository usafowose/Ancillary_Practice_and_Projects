const likes = (names) => {
  //   takes in str arr
  let returnStatmnt = ''
  switch (names.length) {
    case 0:
      returnStatmnt = 'no one likes this'
      break;
    case 1:
      returnStatmnt = `${names[0]} likes this`
      break;
    case 2:
      returnStatmnt = `${names[0]} and ${names[1]} like this`
      break;
    case 3:
      returnStatmnt = `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    default:
      returnStatmnt = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      break;
  }
  return returnStatmnt;
}

let names = ['Andrew', 'Queen', 'Dahjah', 'Jas', 'Andrew', 'Queen', 'Dahjah', 'Jas', 'Jimmy']

console.log(likes(names))