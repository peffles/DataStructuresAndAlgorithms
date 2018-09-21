'use strict';
// NEED TO FIX THESE TESTS
// ALSO NEED TO FIX PROBLEM WITH ESLINT SO I DONT NEED TO
// DISABLE LINES WITH JEST KEYWORDS
const mergeLists = require('../mergeLists'); //eslint-disable-line
const LinkedList = require('../mergeLists'); //eslint-disable-line
// Jest says the I need to invoke lL1 and lL2 with new, cant fix
describe('Testing mergeLists method on the Linked List Class', () => { //eslint-disable-line
  test('Linked lists should be zipped together', () => { //eslint-disable-line
    const lL1 = new LinkedList();
    lL1.append(4);
    lL1.append(0);
    lL1.append(6);
    const lL2 = new LinkedList();
    lL2.append(2);
    lL2.append(8);
    lL2.append(1);
    const lL3 = new LinkedList();
    lL3.append(4);
    lL3.append(2);
    lL3.append(0);
    lL3.append(8);
    lL3.append(6);
    lL3.append(1);
    expect(mergeLists(lL1, lL2)).toMatchObject(lL3); //eslint-disable-line
  });
});