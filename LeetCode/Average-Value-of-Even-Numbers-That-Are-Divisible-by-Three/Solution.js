1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5
6var averageValue = function(nums) {
7    let sum = 0;
8    let count = 0;
9
10    for (let num of nums) {
11        if (num % 2 === 0 && num % 3 === 0) {
12            sum += num;
13            count++;
14        }
15    }
16    if (count === 0) {
17        return 0;
18    }
19    return Math.floor(sum / count);
20
21};