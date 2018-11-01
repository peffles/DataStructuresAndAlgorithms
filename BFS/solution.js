'use strict';

const Queue = require('queue-fifo');

module.exports = (graph, startNode, goalNode) => {
  const queue = new Queue();
  const visitedNodes = new Set();
  const parentPath = new Map();
  queue.enqueue(startNode);
  visitedNodes.add(startNode);
  while (queue.size() > 0) {
    const currentNode = queue.dequeue();

    if (currentNode === goalNode) {
      return parentPath;
    }
    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) { // eslint-disable-line
      const neighborNode = neighbor.node;

      if (visitedNodes.has(neighborNode)) {
        continue; // eslint-disable-line
      } else {
        visitedNodes.add(neighborNode);
      }
      parentPath.set(neighborNode, currentNode);
      queue.enqueue(neighborNode);
    }
  }
  return null;
};
