class NewNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new NewNode(val);
    // if there is no head, make val head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++
    return this;
  }


  // 5->3->1->-1
  pop() {
    let current = this.head;
    let prev;
    if (!this.head) return undefined
    while (current.next) {
      prev = current;
      current = current.next;
    }
    // last it. --> prev = 2nd to last, current = last 
    this.tail = prev;
    this.tail.next = null
    this.length--;
    return current
  }

  

}


let newList = new SLL
console.log(newList.push(1))
console.log(newList.push(2))
console.log(newList.push(3))
console.log(newList.push(4))
console.log(newList.push(5))
console.log(newList.pop());

