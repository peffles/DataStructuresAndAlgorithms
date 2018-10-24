'use strict';

let bishopLocation = null;
let pawnLocation = null;

function findPieces(arr) {
	for(x = 0; x < arr.length; x++) {
		for(y = 0; y < arr.length; y++) {
			if(arr[x][y] === 'b') {
				bishopLocation = arr[x][y];
			}
			if(arr[x][y] === 'p') {
				pawnLocation = arr[x][y];
			}
		}
	}
}

function calcSlope(bishopLocation, pawnLocation) {
  const bishopY = bishopLocation[y];
  const pawnY = pawnLocation[y];
  const bishopX = bishopLocation[x];
  const pawnX = pawnLocation[x];

  const slope = Math.round((pawnY - bishopY) / (pawnX - bishopY));

  if(slope === 1 || slope === -1) {
      return true;
  }
  return false;
}
