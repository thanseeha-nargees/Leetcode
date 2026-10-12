1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5
6var isPalindrome = function(s) {
7    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
8
9    let left = 0;
10    let right = s.length - 1;
11
12    while (left < right) {
13        if (s[left] !== s[right]) {
14            return false;
15        }
16
17        left++;
18        right--;
19    }
20
21    return true;
22};
23