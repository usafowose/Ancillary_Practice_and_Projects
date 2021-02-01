// Each node contains two things
// --piece of data (val)
// --reference to next node (next)

class MyNode {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}



class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }

  push(val) {
    let newVal = new MyNode(val)
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

  pop() {
    let current = this.head
    let previous;

    if (!this.head) {
      return undefined
    }
    while (current.next) {
      previous = current
      current = current.next
    }
    this.tail.next = null;
    this.tail = previous

    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }
    return current

  }

  shift() {
    if (!this.head) return undefined
    let prevHead = this.head;
    this.head = prevHead.next
    this.length--;
    return prevHead
  }

  unshift(newVal) {
    let newNode = new MyNode(newVal)
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
    var current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }

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

let list = new SinglyLinkedList
console.log(list.push(21));
console.log(list.push(22))
console.log(list.head)
console.log(list.push())
console.log(list.push(42))
console.log(list.push(99))
console.log(list.push(100))
console.log(list.push(115))
console.log(list.tail)
console.log(list.unshift('Hello Again'))
console.log(list.length)
console.log(list)
console.log(list.reverse())


// console.log(list.traverse())
 // traverse() {
  //   var current = this.head
  //   while (current) {
  //     console.log(current.val)
  //     current = current.next
  //   }
  // }