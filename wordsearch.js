const index = 0; 
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    } 
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}

const transpose = function(matrix) {
    const newArray = []
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j].push(matrix[i][j]);
      } 
    }
    return newArray;
  };

const result = wordSearch([
    ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
    ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'I', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'N', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'F', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
    ['S', 'E', 'L', 'N', 'F', 'E', 'L', 'D'],
    ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'D', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD')

module.exports = wordSearch