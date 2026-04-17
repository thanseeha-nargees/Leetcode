1/**
2 * @param {number[]} digits
3 * @return {number[]}
4 */
5    function plusOne(digits) {
6    for (let i = digits.length - 1; i >= 0; i--) {
7        if (digits[i] < 9) {
8            digits[i]++;
9            return digits;
10        }
11        digits[i] = 0;
12    }
13
14    digits.unshift(1);
15    return digits;
16
17};