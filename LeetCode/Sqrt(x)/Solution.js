1/**
2 * @param {number} x
3 * @return {number}
4 */
5
6var mySqrt = function(x) {
7    if (x < 2) return x;
8
9    let left = 1;
10    let right = Math.floor(x / 2);
11    let ans = 0;
12
13    while (left <= right) {
14        let mid = Math.floor((left + right) / 2);
15
16        if (mid <= Math.floor(x / mid)) {
17            ans = mid;
18            left = mid + 1;
19        } else {
20            right = mid - 1;
21        }
22    }
23
24    return ans;
25
26};