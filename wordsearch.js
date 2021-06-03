const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const virticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } 
    }
    for (v of virticalJoin) {
        if (v.includes(word)) {
            return true;
        } 
    }
    return false;
}
const transpose = function(matrix) {
    let newArr = [];
    for (let row = 0; row < matrix[0].length; row++) {
      let arr = [];
      for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[i][row]);
      }
      newArr.push(arr);
    }
    return newArr;
}


module.exports = wordSearch