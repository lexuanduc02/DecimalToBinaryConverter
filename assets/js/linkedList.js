// Định nghĩa lớp Node để biểu diễn mỗi node trong danh sách liên kết đơn
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Lớp LinkedList sử dụng danh sách liên kết đơn để biểu diễn
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Phương thức để kiểm tra xem LinkedList có rỗng không
  isEmpty() {
    return this.size === 0;
  }

  // Phương thức để thêm một phần tử vào LinkedList
  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Phương thức để lấy một phần tử ra khỏi LinkedList
  remove() {
    if (!this.head) {
      console.log("Linked List Underflow");
      return null;
    }
    let removedData;
    if (this.size === 1) {
      removedData = this.head.data;
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      removedData = current.next.data;
      current.next = null;
    }
    this.size--;
    return removedData;
  }
}

function convertIntegerToBinary(integerPart) {
  let binaryResult = "";

  if (integerPart === 0) {
    binaryResult = "0.";
  } else {
    let linkedList = new LinkedList();

    while (integerPart > 0) {
      let bit = integerPart % 2;
      linkedList.add(bit);
      integerPart = Math.floor(integerPart / 2);
    }

    while (!linkedList.isEmpty()) {
      binaryResult += linkedList.remove().toString();
    }

    binaryResult += ".";
  }

  return binaryResult;
}

function convertDecimalToBinary(decimalPart, iterations) {
  let binaryResult = "";

  for (let i = 0; i < iterations; ++i) {
    decimalPart *= 2;
    let bit = Math.floor(decimalPart);
    binaryResult += bit.toString();
    decimalPart -= bit;
  }

  return binaryResult;
}

export function reverseToBinaryLinkedList(number, iterations) {
  let integerPart = Math.floor(number);
  let decimalPart = number - integerPart;

  let integerBinary = convertIntegerToBinary(integerPart);
  let decimalBinary = convertDecimalToBinary(decimalPart, iterations);

  return integerBinary + decimalBinary;
}
