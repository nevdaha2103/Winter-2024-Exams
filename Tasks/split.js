// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index);
  return [begin, end];
};

module.exports = splitArray;
