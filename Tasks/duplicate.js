// Return an array without duplicates

'use strict';

const duplicate = (text, repeat) => {
  if (repeat <= 0) return [];
  else {
    const duplicateText = [];
    for (let i = 0; i < repeat; i++) {
     duplicateText[i] = text;
    }
    return duplicateText;
  }
};

module.exports = duplicate;
