// Return an array without duplicates

duplicate = (text, N) => {
  if (N <= 0) return [];
  else {
    duplicateText = [];
    for (let i = 0; i < N; i++) {
      duplicateText[i] = text;
    }
    return duplicateText;
  }
};

module.exports = duplicate;
