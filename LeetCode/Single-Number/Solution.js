1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5
6var singleNumber = function(nums) {
7    let result = 0;
8
9    for (let i = 0; i < nums.length; i++) {
10        result = result ^ nums[i];
11    }
12
13    return result;
14};
15