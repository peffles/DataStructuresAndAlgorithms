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
  mergeLists(lL1, lL2) {
    let temp = null;
    let curr1 = lL1.head;
    let curr2 = lL2.head;

    if(!curr1 || curr2) {
      throw new Error('One or more linked lists are invalid!');
    }
    while(curr1 && curr2) {
      curr1 = curr1.next;
      temp = curr2.next;
      curr2 = curr2.next;
      curr1 = temp;
    }

    return lL1;
  }
};