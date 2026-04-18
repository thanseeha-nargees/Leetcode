1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5function canBeIncreasing(nums) {
6    let count = 0;
7
8    for (let i = 1; i < nums.length; i++) {
9        if (nums[i - 1] >= nums[i]) {
10            count++;
11
12            if (count > 1) return false;
13
14            if (i > 1 && nums[i - 2] >= nums[i] &&
15                i < nums.length - 1 && nums[i - 1] >= nums[i + 1]) {
16                return false;
17            }
18        }
19    }
20
21    return true;
22
23}