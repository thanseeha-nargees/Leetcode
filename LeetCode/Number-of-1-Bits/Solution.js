1/**
2 * @param {number} n
3 * @return {number}
4 */
5
6function hammingWeight(n) {
7    let count = 0;
8
9    while (n > 0) {
10        if (n & 1) {
11            count++;
12        }
13        n = n >> 1;
14    }
15
16    return count;
17
18};