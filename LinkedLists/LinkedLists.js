class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push method
  // 1. Accepts a value
  // 2. Creates a new node using the value passed to the function
  // 3. If there is no head property on this list, set the head and tail to be the newly created node
  // 4. Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // 5. Increment the length by one

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
}

let list = new SinglyLinkedList();
let i = 0;
while (i < 10) {
  list.push(i);
  i++;
}

console.log(list);
