'use strict';

module.exports = class FifoAnimalShelter {
  constructor() {
    this.dogShelter = {};
    this.catShelter = {};
  }
  enqueue(animal) {
    if (animal.type === 'cat') {
      this.catShelter.push(animal);
      return this.catShelter;
    } else { this.dogShelter.push(animal); //eslint-disable-line
    return this.dogShelter; //eslint-disable-line
    }
  }
};
