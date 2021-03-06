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

  // Shift method
  // 1. If there are no nodes, return undefined
  // 2. Store the current head property in a variable
  // 3. Set the head property to be the current head's next property
  // 4. Decrement the length by 1
  // 5. Return the value of the node removed

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // Unshift method
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to the function
  // 3. If there is no head property on the list, set the head and tail to be the newly created node
  // 4. Otherwise set the newly created node's next property to be the current head property on the list
  // 5. Set the head property on the list to be that newly created node
  // 6. Increment the length of the list by 1
  // 7. Return the linked list

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Get method
  // 1. This function should accept an index
  // 2. If the index is less than zero or greater than or equal to the length of the list, return null
  // 3. Loop through the list until you reach the index and return the node at that specific index

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }
}

// Create new list with 10 nodes
let list = new SinglyLinkedList();
let i = 0;
while (i < 5) {
  console.log(list.push(i), "Pushed a new node");
  i++;
}

// Pop a node from the list
console.log(list.pop(), "Popped a node");

// Shift a node
console.log(list.shift(), "Shifted a node");

// Unshift a node
console.log(list.unshift(13), "Unshifted a node with value of 13");

// Get a node by using an index as input
console.log(
  list.get(2),
  "Accessed a node by inputting index with get() method"
);
