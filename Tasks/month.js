// Get month number

'use strict'

const getMonthIndex = (monthName) => {
  let monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
];


for (let i = 0; i < monthList.length; i++) {
  if (monthName.toLowerCase().startsWith(monthList[i])) return i + 1;
}
  return -1;
};

module.exports = getMonthIndex;
