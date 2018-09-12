'use strict';

const reverseArray = require('../reverseArray');

describe('reverseArray.test.js', () => {
  describe('Testing reverseArray function', () => {
    test('should return the array in reversed order', () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });
    test('Array should return array of strings in reversed order', () => {
      expect(reverseArray(['hello', 'world'])).toEqual(['world', 'hello']);
    });
    test('should return array of negative numbers in reversed order', () => {
      expect(reverseArray([-1, -2, -3])).toEqual([-3, -2, -1]);
    });
    test('should return array of positive and negative numbers in reversed order', () => {
      expect(reverseArray([-1, 2, -3])).toEqual([-3, 2, -1]);
    });
    test('testing an array with only one value', () => {
      expect(reverseArray([100])).toEqual([100]);
    });
  });
});
