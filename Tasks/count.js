// Sum all number values in dict

"use strict";

const sum = (object) => {
  let sum = 0;
  
  const keys = Object.keys(object);
  keys.forEach((key) => {
    [];
    const value = obj[key];
    if (typeof value === "number") sum += value;
  });
  
  return sum;
};

module.exports = sum;
