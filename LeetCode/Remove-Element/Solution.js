1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    
8    let k = 0;
9
10    for (let i = 0; i < nums.length; i++) {
11        if (nums[i] !== val) {
12            nums[k] = nums[i];
13            k++;
14        }
15    }
16
17    return k;
18
19};