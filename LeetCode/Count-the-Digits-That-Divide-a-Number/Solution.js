1/**
2 * @param {number} num
3 * @return {number}
4 */
5var countDigits = function(num) {
6    let original = num;
7    let count = 0;
8
9    while (num > 0) {
10        let digit = num % 10;  
11
12        if (original % digit === 0) {
13            count++;
14        }
15
16        num = Math.floor(num / 10);
17    }
18
19    return count;
20};
21