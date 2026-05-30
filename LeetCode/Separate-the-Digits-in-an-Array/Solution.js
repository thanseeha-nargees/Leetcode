1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var separateDigits = function(nums) {
6    let num = nums.join("").split("").map(Number)
7    return num
8};