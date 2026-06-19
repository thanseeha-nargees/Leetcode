1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6
7    var searchInsert = function(nums, target) {
8    let left = 0;
9    let right = nums.length - 1;
10
11    while (left <= right) {
12        let mid = Math.floor((left + right) / 2);
13
14        if (nums[mid] === target) {
15            return mid;
16        } else if (nums[mid] < target) {
17            left = mid + 1;
18        } else {
19            right = mid - 1;
20        }
21    }
22
23    return left;
24
25};