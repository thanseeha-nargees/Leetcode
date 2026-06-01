1/**
2 * @param {string[]} words
3 * @param {character} x
4 * @return {number[]}
5 */
6
7    
8var findWordsContaining = function(words, x) {
9    let result = []
10    for(let i = 0 ; i < words.length ; i++){
11        if(words[i].includes(x)){
12            result.push(i)
13        }
14    }
15
16    return result
17
18};