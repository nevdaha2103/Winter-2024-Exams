// Filter array by type name

'use strict'

const filterOfValues = (arrayOfElements, wantedType) => {
  const filteredArray = arrayOfElements.filter(element => typeof element === wantedType);
  return filteredArray;
  };

module.exports = filterOfValues;
