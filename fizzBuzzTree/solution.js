'use strict';


function fizzBuzzTree(tree) {
  if (!root) {
    return undefined;
  }
  if (root % 3 === 0 && root % 5 !== 0) {
    root.value = 'fizz';
  }
  if (root % 5 === 0 && root % 3 !== 0) {
    root.value = 'buzz';
  }
  if (root % 3 === 0 && root % 5 === 0) {
    root.value = 'fizzBuzz';
  }
  return tree;
}
fizzBuzzTree(root.left);
fizzBuzzTree(root.right);
