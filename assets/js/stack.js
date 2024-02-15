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

// Function to reverse the string
export function reverseToBinaryStack(inout) {
  // return output;
}
