1/**
2 * @param {string} s
3 * @return {string}
4 */
5var sortSentence = function(s) {
6
7    const words = s.split(" ");
8
9    
10    const result = [];
11
12    
13    for (let word of words) {
14        const position = word[word.length - 1];   
15        const actualWord = word.slice(0, -1);    
16        result[position - 1] = actualWord;       
17    }
18
19    
20    return result.join(" ");
21};