// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  begin = array.slice(0, index);
  const end = array.length;
  array = array.slice(index, end);
  return [begin, end];
};

module.exports = splitArray;
