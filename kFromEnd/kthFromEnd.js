'use strict';

const Node = require('./node'); //eslint-disable-line

module.exports = class LinkedList { //eslint-disable-line
  constructor() {
    this.head = null;
  }

  kthFromEnd (k) {
    let current = this.head;
    let counter = 0;
    let j  = counter -k;

    while (current) {
      if (current.next === null) {
        current = current.next;
        counter ++;
      }
    }
    if (k > length) {
      return null;
    }

    for (let i = 0; i < j; i++) {
      current = current.next;
    }
    return current.value;
  }
};
