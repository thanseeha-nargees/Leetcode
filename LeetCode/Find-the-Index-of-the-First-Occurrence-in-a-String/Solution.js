1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7    
8    const n = haystack.length;
9    const m = needle.length;
10
11    if (m === 0) return 0;
12
13    for (let i = 0; i <= n - m; i++) {
14        let j = 0;
15
16        while (j < m && haystack[i + j] === needle[j]) {
17            j++;
18        }
19
20        if (j === m) {
21            return i;
22        }
23    }
24
25    return -1;
26};