const mergeSort = (arr) => {
  //merge fn that merges two sorted arrays
  const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j])
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i])
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j])
      j++;
    }
    return results;
  }
  const splitSort = arr => {
    if (arr.length <= 1) return arr;
    let midIndx = Math.floor(arr.length / 2)
    let leftHalf = splitSort(arr.slice(0, midIndx))
    let rightHalf = splitSort(arr.slice(midIndx))
    return merge(leftHalf, rightHalf)
  }

  return splitSort(arr)
}

let arr = [10, 76, 24, 33, 29, 8, 8, 9]

console.log(mergeSort(arr))

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName; 
    this.lastName = lastName
  }

  static EnrollStudents() {
    return  
  }
}