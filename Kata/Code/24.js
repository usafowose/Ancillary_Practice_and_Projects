function gooseFilter(birds = []) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let start = -1;
  let modified = [...birds]; 

  while (start < birds.length) {
    if (modified.indexOf(geese[start]) !== -1) {
      modified.splice(modified.indexOf(geese[start]), 1);
    }
    start++;
  }
  return modified; 
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))