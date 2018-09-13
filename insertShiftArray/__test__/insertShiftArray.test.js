'use strict';

const insertMiddle = require('../insertShiftArray.js');

describe('Testing the insertMiddle function', () => {
  describe('testing insertMiddle function', () => {
    test('should return the array with 10 inserted in the middle', () => {
      expect(insertMiddle.middleInsertion([50, 5], 10)).toEqual([50, 10, 5]);
    });
    test('tests for an array with only one value stored within it', () => {
      expect(insertMiddle.middleInsertion([1], 20)).toEqual([20, 1]);
    });
    test('tests for an empty array', () => {
      expect(insertMiddle.middleInsertion([], 2)).toEqual([2]);
    });
    test('tests for valid input', () => {
      expect(insertMiddle.middleInsertion(['hello', 'world'], 'interruption')).toEqual(['hello', 'interruption', 'world']);
    });
  });
});
