'use strict';

const expect = require('chai').expect;
const solution = require('../solution.js').findMissing;

describe('findMissing',() => {
  let arr = arrayBuilder();
  let removed = removeRandom(arr);
  arr = shuffle(arr);

  it('returns the missing number in the array',() => {
    expect(solution(arr)).to.equal(removed);
  })
});

function arrayBuilder(length) {
  length = length || 100000;
  var array = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
  return array;
}

function removeRandom(arr) {
  var removedNumber = Math.floor(Math.random() * arr.length);
  return arr.splice(removedNumber, 1)[0];
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
