1/**
2 * @param {string} a
3 * @param {string} b
4 * @return {string}
5 */
6var addBinary = function(a, b) {
7   
8    let i = a.length - 1;
9    let j = b.length - 1;
10    let carry = 0;
11    let result = "";
12
13    while (i >= 0 || j >= 0 || carry) {
14        let sum = carry;
15
16        if (i >= 0) sum += Number(a[i--]);
17        if (j >= 0) sum += Number(b[j--]);
18
19        result = (sum % 2) + result;
20        carry = Math.floor(sum / 2);
21    }
22
23    return result;
24
25};