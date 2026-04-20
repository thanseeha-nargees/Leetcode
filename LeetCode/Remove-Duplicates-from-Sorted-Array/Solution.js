1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5    var removeDuplicates = function(nums) {
6    if (nums.length === 0) return 0;
7
8    let k = 1; // position for next unique element
9
10    for (let i = 1; i < nums.length; i++) {
11        if (nums[i] !== nums[i - 1]) {
12            nums[k] = nums[i];
13            k++;
14        }
15    }
16
17    return k;
18};
19