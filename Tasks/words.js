// Count words in a string

'use strict';

const countWords = (inputString) => inputString.trim().split(/\s+/).filter(word => word !== '').length;
