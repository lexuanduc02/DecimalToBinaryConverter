// stack
class Stack {
  size;
  top;
  a = [];

  // Function to check if stack is empty
  isEmpty() {
    return this.top < 0;
  }

  constructor(n) {
    this.top = -1;
    this.size = n;
    this.a = new Array(this.size);
  }

  // Function to push element in Stack
  push(x) {
    if (this.top >= this.size) {
      document.write("Stack Overflow<br>");
      return false;
    } else {
      this.a[++this.top] = x;
      return true;
    }
  }

  // Function to pop element from stack
  pop() {
    if (this.top < 0) {
      document.write("Stack Underflow<br>");
      return 0;
    } else {
      let x = this.a[this.top--];
      return x;
    }
  }
}

function convertIntegerToBinary(integerPart) {
  let binaryResult = "";

  if (integerPart === 0) {
    binaryResult = "0.";
  } else {
    let stack = new Stack(Math.ceil(Math.log2(integerPart)) + 1);

    while (integerPart > 0) {
      let bit = integerPart % 2;
      stack.push(bit);
      integerPart = Math.floor(integerPart / 2);
    }

    while (!stack.isEmpty()) {
      binaryResult += stack.pop().toString();
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

export function reverseToBinaryStack(number, iterations) {
  let integerPart = Math.floor(number);
  let decimalPart = number - integerPart;

  let integerBinary = convertIntegerToBinary(integerPart);
  let decimalBinary = convertDecimalToBinary(decimalPart, iterations);

  return integerBinary + decimalBinary;
}
