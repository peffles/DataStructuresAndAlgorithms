'use strict';

class Stack {
  constructor() {
    this.storage = [];
  }
  pop() {
    this.storage.pop();
  }
  push(value) {
    this.storage.push(value);
  }
}
const stackyStack = new Stack();

stackyStack.push(9);
stackyStack.push(8);
stackyStack.push(4);
stackyStack.push(2);
stackyStack.push(0);

let poppedValue = null;

while(poppedValue = stackyStack.pop()) { //eslint-disable-line
  console.log(poppedValue);
}

class QueueFrom2Stacks {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  dequeue() {
    let poppedValue2 = this.stackB.pop();
    if(poppedValue2) {
      return poppedValue2;
    } else {
      while (true) {
        
      }
    }
    if (poppedValue2) {
      this.stackB.push(poppedValue2);
    } else {
      break;
    }
    return this.stackB.pop();
  }

  enqueue(value) {
    this.stackA.push(value);
  }
}
const stackyStack2 = new QueueFrom2Stacks();

stackyStack2.enqueue(1);
stackyStack2.enqueue(2);
stackyStack2.enqueue(3);
stackyStack2.enqueue(4);
stackyStack2.enqueue(5);

