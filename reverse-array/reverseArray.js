'use strict';

function reverseArray(arr) {
  let temp = null;
  const LEN = arr.length;
  const MID = LEN / 2;

  for (let i = 0; i < MID; i += 1) {
    temp = arr[i];
    arr[i] = arr[LEN - 1 - i];
    arr[LEN - 1 - i] = temp;
  }
  return (arr);
}
reverseArray([1, 2, 3, 4, 5]);
module.exports = reverseArray;
