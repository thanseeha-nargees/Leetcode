1/**
2 * @param {number} n
3 * @return {number}
4 */
5var climbStairs = function(n) {
6    if (n <= 2) return n;
7
8    let first = 1;
9    let second = 2;
10
11    for (let i = 3; i <= n; i++) {
12        let current = first + second;
13        first = second;
14        second = current;
15    }
16
17    return second;
18
19};