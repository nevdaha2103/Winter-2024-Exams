// Get month number

'use strict'

const getMonthIndex = (monthName) => {
  let monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
];

let lowerMonthName = monthName.toLowerCase();

for (const [index, month] of monthList.entries()) {
  if (lowerMonthName.indexOf(month) == 0) return index + 1;
}
  return -1;
};

module.exports = getMonthIndex;
