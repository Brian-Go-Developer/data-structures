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

  // Pop method
  // 1. If there are no nodes in the list, return undefined
  // 2. Loop through the list until you reach the tail
  // 3. Set the next property of the 2nd to last node to be null
  // 4. Set the tail to be the 2nd to last node
  // 5. Decrement the length of the list by 1
  // 6. Return the value of the node removed

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

// Create new list with 10 nodes
let list = new SinglyLinkedList();
let i = 0;
while (i < 10) {
  list.push(i);
  i++;
}
console.log(list, "Created new list");

// Pop a node from the list
list.pop();
console.log(list, "Popped a node");
list.pop();
console.log(list, "Popped a node");
list.pop();
console.log(list, "Popped a node");
