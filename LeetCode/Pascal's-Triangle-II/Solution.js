1/**
2 * @param {number} rowIndex
3 * @return {number[]}
4 */
5
6var getRow = function(rowIndex) {
7    let row = [1];
8
9    for (let i = 1; i <= rowIndex; i++) {
10        for (let j = row.length - 1; j > 0; j--) {
11            row[j] = row[j] + row[j - 1];
12        }
13        row.push(1);
14    }
15
16    return row;
17};
18