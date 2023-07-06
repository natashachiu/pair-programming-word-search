const wordSearch = (letters, word) => {
  if (!letters || !word) return false;
  if (!Array.isArray(letters) || typeof word !== "string") return false;
  if (!letters.length) return false;

  const horizontalJoin = mapLetters(letters);
  if (searchWord(horizontalJoin, word)) return true;

  const transposedLetters = transpose(letters);
  const verticalJoin = mapLetters(transposedLetters);
  if (searchWord(verticalJoin, word)) return true;

  const BackwardsHorizontalJoin = mapLettersBackwards(letters);
  if (searchWord(BackwardsHorizontalJoin, word)) return true;

  const BackwardsVerticalJoin = mapLettersBackwards(transposedLetters);
  if (searchWord(BackwardsVerticalJoin, word)) return true;

  return false;
};

const mapLetters = (array) => array.map(ls => ls.join(''));

const mapLettersBackwards = (array) => array.map(ls => ls.reverse().join(''));


const searchWord = (joinedArr, word) => {

  for (const l of joinedArr) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let transposedMatrix = [];

  for (let row = 0; row < matrix[0].length; row++) {
    transposedMatrix.push([]);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let element = matrix[row][col];
      transposedMatrix[col][row] = element;
    }
  }
  return transposedMatrix;
};


module.exports = wordSearch;