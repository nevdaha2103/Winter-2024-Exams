// Sum all number values in dict

"use strict";

const sum = (object) => {
  let sum = 0;
  
  const values = Object.values(object);
  for (const value of values) {
  
  
    if (typeof value === "number") sum += value;
  };
  
  return sum;
};

module.exports = sum;
