1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    let S = s.trim()
7    let words = S.split(" ");
8    return words[words.length - 1].length;
9};