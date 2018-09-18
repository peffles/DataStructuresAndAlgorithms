'use strict';

const Node = require('./node'); //eslint-disable-line

module.exports = class LinkedList { //eslint-disable-line
  constructor() {
    this.head = null;
  }
  append(value) {
    if(!this.head) {
      return null;
    }
    let node = new Node();
    let current = this.head;
    while(current) {
      if(current.next === null) {
        current.next = node;
      }
      current = current.next;
      current = value;
    }
    return this;
  }
};