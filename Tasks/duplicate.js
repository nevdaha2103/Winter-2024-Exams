// Return an array without duplicates

'use strict';

duplicate = (text, repeat) => {
  if (repeat <= 0) return [];
  else {
    const duplicateText = [];
    for (let i = 0; i < repeat; i++) {
     const duplicateText[i] = text;
    }
    return duplicateText;
  }
};

module.exports = duplicate;
