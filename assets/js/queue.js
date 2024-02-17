// Minimal Linked List implementation with: append, deleteHead and toArray (optional) methods.
// To match the time complexity of O(1) on both add (enqueue) & removal (dequeue) of Queue, we will be using both ends of the Linked List. Therefore we maintain both head and tail pointers.

class LinkedListMinimal {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  // add to the end of the list
  append(value) {
    // Initialize a newNode with value recieved and next as null.
    const newNode = {
      value: value,
      next: null
    }
    
    // Let's check if Linked List is empty or not first.
    if (!this.head) {
      // If there is no head (no elements) it is empty. In that case make the newNode as head
      // since it is the only node at this point and there is no tail either,
      // tail will also have the same value (both head and tail will point to same place in memory from now on):
      this.head = newNode
      this.tail = newNode
    } else {
      // If Linked List is not empty, Attach new node to the end of linked list:
      this.tail.next = newNode      
      this.tail = newNode
    }

    this.length++
  }
  
  deleteHead() {
    if (!this.head) return

    const headVal = this.head.value

    // if one element left
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return headVal
    }

    // define newHead as this.head.next
    const newHead = this.head.next
    // now change the head pointer to newHead
    this.head = newHead
    this.length--
    return headVal
  }
  
  // toArray - loop through nested objects, then return the values in an array
  toArray() {
    const array = []
    // Initialize a currentNode variable pointing to this.head - which will be the starting point for traversal.
    let currentNode = this.head

    // fill the array until we reach the end of list:
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

class Queue {
  constructor() {
    this.items = new LinkedListMinimal()
  }
  
  // add to the end of Queue
  enqueue(value) {
    this.items.append(value)
  }
  
  // remove from the beginning of Queue
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    
    const dequeuedItem = this.items.deleteHead()
    if (!dequeuedItem) return
    return dequeuedItem
  }
  
  // retrieve first element in the Queue
  peek() {
    if (this.isEmpty()) return null
    return this.items.head.value
  }
  
  // helper method to check if Queue is empty
  isEmpty() {
    return this.items.length === 0
  }

  //helper method returns Queue elements as an String
  get printAsString() {
    return this.items.toArray().join("");
  }
}

function integerPart(input) {
  return (Math.trunc(input) >>> 0).toString(2);
}

function decimalPart(input, numberOfBits) {
  const queue = new Queue();
  let decimalPart = input - Math.trunc(input);
  let count = 0;

  while (decimalPart > 0 && count < numberOfBits) {
    decimalPart *= 2;
    let bit = Math.trunc(decimalPart);
    queue.enqueue(bit);
    decimalPart -= bit;
    count++;
  }

  return queue.printAsString;
}

export function reverseToBinaryQueue(input, numberOfBits = 23) {
  let integer = integerPart(input);
  let decimal = decimalPart(input, numberOfBits);
  return `${integer}.${decimal}`;
}
