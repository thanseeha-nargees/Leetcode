1/**
2 * @param {string} s
3 * @return {number}
4 */
5    function romanToInt(s) {
6    const map = {
7        I: 1,
8        V: 5,
9        X: 10,
10        L: 50,
11        C: 100,
12        D: 500,
13        M: 1000
14    };
15
16    let total = 0;
17
18    for (let i = 0; i < s.length; i++) {
19        let current = map[s[i]];
20        let next = map[s[i + 1]];
21
22        if (current < next) {
23            total -= current;
24        } else {
25            total += current;
26        }
27    }
28
29    return total;
30
31};