'use strict';

const insertMiddle = module.exports = {};

insertMiddle.middleInsertion = function middleInsertion(arr, value) {
  const LEN = arr.length;
  const MID = Math.floor(LEN / 2);

  arr.splice(MID, 0, value);
  return arr;
};
insertMiddle.middleInsertion([1, 4, 2, 5], 20);
