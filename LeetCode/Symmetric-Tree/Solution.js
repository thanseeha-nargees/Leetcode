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
14    var isSymmetric = function(root) {
15    function isMirror(left, right) {
16        if (left === null && right === null) {
17            return true;
18        }
19
20        if (left === null || right === null) {
21            return false;
22        }
23
24        if (left.val !== right.val) {
25            return false;
26        }
27
28        return isMirror(left.left, right.right) &&
29               isMirror(left.right, right.left);
30    }
31
32    return isMirror(root.left, root.right);
33
34};