1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5
6var isValid = function(s) {
7    const stack = [];
8    const map = {
9        ')': '(',
10        '}': '{',
11        ']': '['
12    };
13
14    for (let ch of s) {
15        if (ch === '(' || ch === '{' || ch === '[') {
16            stack.push(ch);
17        } else {
18            if (stack.pop() !== map[ch]) {
19                return false;
20            }
21        }
22    }
23
24    return stack.length === 0;
25
26};