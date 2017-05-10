'use strict';

module.exports = {
  findMissing: arr => {
    let originalLength = arr.length + 1;
    let originalSum = (originalLength * (originalLength + 1)) / 2;

    // 1 + 2 + 3 + 4 + ⋯ + n
    // https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
    let arrSum = arr.reduce((acc,el) => acc + el);

    return originalSum - arrSum;
  }
}
