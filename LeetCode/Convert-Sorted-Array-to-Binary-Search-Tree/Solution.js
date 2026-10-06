1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {number[]} nums
11 * @return {TreeNode}
12 */
13var sortedArrayToBST = function(nums) {
14    if (nums.length === 0) {
15        return null;
16    }
17
18    const mid = Math.floor(nums.length / 2);
19
20    const root = new TreeNode(nums[mid]);
21
22    root.left = sortedArrayToBST(nums.slice(0, mid));
23    root.right = sortedArrayToBST(nums.slice(mid + 1));
24
25    return root;
26};