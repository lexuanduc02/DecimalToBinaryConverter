class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Hàng đợi rỗng";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Hàng đợi rỗng";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

export function reverseToBinaryQueue(input) {
  // return output;
}
