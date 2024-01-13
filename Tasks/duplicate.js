// Return an array without duplicates

duplicate = (text, repeat) => {
  if (repeat <= 0) return [];
  else {
    duplicateText = [];
    for (let i = 0; i < repeat; i++) {
      duplicateText[i] = text;
    }
    return duplicateText;
  }
};

module.exports = duplicate;
