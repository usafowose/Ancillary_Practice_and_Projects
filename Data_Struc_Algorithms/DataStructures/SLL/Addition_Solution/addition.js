class MyNode {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }

  push(dig) {
    let newVal = new MyNode(dig)
    if (!this.head) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      this.tail.next = newVal;
      this.tail = newVal
    }
    this.length++
    return this;
  }

  unshift(dig) {
    let newNode = new MyNode(dig)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }
    let oldHead = this.head;
    this.head = newNode
    this.head.next = oldHead;
    this.length++
    return this
  }

  traverse() {
    if (!this.head) return undefined
    var current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
    return counted
  }

  // add(addedSLL) {
  //   let current = this.head;
  //   var SumList = new SLL;
  //   while (current.next) {
  //     addedSLL.traverse().forEach(val => SumList.push(val))
  //     current = current.next
  //   }
  //   // current is now last index
  // }

  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current
    let next;
    let prev = null

    for (var i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next
    }
    return this

  }
}

// 123+456 = 279 --> Case 1
// 350 + 270 = --> Case 2
// Loop throught these backwards (while ior j >= 0) and unshift each index to front of SLL
// num1 = new LL -->
// num 2 = new LL -->

//  num1.unhsift(val) until i = 0 
// num2.unshift(val) until i= 0

// 123+456 = 579 --> Case 1


// case1firstNum.unshift()


const add = (num1, num2) => {
  let firstNum = new SLL
  let secondNum = new SLL
  let sumList = new SLL;
  let i = [...num1.toString()].length - 1;
  let j = [...num2.toString()].length - 1;

  // console.log(i, j)

  // while (i >= 0 && j >= 0) {
  //   firstNum.push(parseInt([...num1.toString()][i]));
  //   secondNum.push(parseInt([...num2.toString()][j]));
  //   i--;
  //   j--;
  // }

  while (i >= 0) {
    firstNum.push(parseInt([...num1.toString()][i]));
    i--;
  }
  while (j >= 0) {
    secondNum.push(parseInt([...num2.toString()][j]));
    j--;
  }

  console.table({
    addend1: num1,
    addend2: num2
  })

  console.table({
    table1: firstNum,
    table2: secondNum
  })




  // case1firstNum and secondNum now have lwngth of 3 but LL is backwards in order to add
  let carryOver = 0; //in the event that carry over is initiated

  while (firstNum.head || secondNum.head) {
    let startingVal1 = firstNum.head ? firstNum.head.val : 0
    let startingVal2 = secondNum.head ? secondNum.head.val : 0

    let sum = startingVal1 + startingVal2 + carryOver
    carryOver = 0
    let newVal = sum


    if (sum > 9) { //cannot have double digit sum re-inserted into LL, so if sum is over nine, we carry over the 9
      carryOver = 1 //max carry over value --in case of 9+9
      newVal = sum % 10;

    }


    sumList.push(newVal)


    if (firstNum.head) {
      firstNum.head = firstNum.head.next
    }
    if (secondNum.head) {
      secondNum.head = secondNum.head.next
    }
  }
  if (carryOver) { //if after all additions, there is still a remainder
    sumList.push(carryOver)
  }

  return sumList.reverse();



  // console.log(case1secondNum, case1firstNum)
}

console.log(add('565565565565565565', '435435435435435435')) //579? 


// console.log(list.push(21));
// console.log(list.push(22))
// console.log(list.head)
// console.log(list.push())
// console.log(list.push(42))
// console.log(list.push(99))
// console.log(list.push(100))
// console.log(list.push(115))
// console.log(list.tail)
// console.log(list.unshift('Hello Again'))
// console.log(list.length)
// console.log(list)
// console.log(list.reverse())


// console.log(list.traverse())
 // traverse() {
  //   var current = this.head
  //   while (current) {
  //     console.log(current.val)
  //     current = current.next
  //   }
  // }