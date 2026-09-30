1/**
2 * @param {number} numRows
3 * @return {number[][]}
4 */
5var generate = function(numRows) {
6    let result = [];
7
8    for (let i = 0; i < numRows; i++) {
9        let row = [];
10
11        row.push(1);
12
13        for (let j = 1; j < i; j++) {
14            row.push(result[i - 1][j - 1] + result[i - 1][j]);
15        }
16
17        if (i > 0) {
18            row.push(1);
19        }
20
21        result.push(row);
22    }
23
24    return result;
25};