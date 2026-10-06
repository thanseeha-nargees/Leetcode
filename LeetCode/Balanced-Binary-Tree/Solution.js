1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {boolean}
12 */
13
14var isBalanced = function(root) {
15    function height(node) {
16        if (node === null) {
17            return 0;
18        }
19
20        const left = height(node.left);
21
22        if (left === -1) {
23            return -1;
24        }
25
26        const right = height(node.right);
27
28        if (right === -1) {
29            return -1;
30        }
31
32        if (Math.abs(left - right) > 1) {
33            return -1;
34        }
35
36        return Math.max(left, right) + 1;
37    }
38
39    return height(root) !== -1;
40};