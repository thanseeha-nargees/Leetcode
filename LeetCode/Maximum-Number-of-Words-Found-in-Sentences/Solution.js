1/**
2 * @param {string[]} sentences
3 * @return {number}
4 */
5
6    var mostWordsFound = function(sentences) {
7    let maxWords = 0;
8
9    for (let sentence of sentences) {
10        let wordCount = sentence.split(" ").length;
11        maxWords = Math.max(maxWords, wordCount);
12    }
13
14    return maxWords;
15
16};