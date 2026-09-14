1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8
9  function merge(nums1, m, nums2, n) {
10    let i = m - 1;
11    let j = n - 1;
12    let k = m + n - 1;
13
14    while (j >= 0) {
15        if (i >= 0 && nums1[i] > nums2[j]) {
16            nums1[k] = nums1[i];
17            i--;
18        } else {
19            nums1[k] = nums2[j];
20            j--;
21        }
22
23        k--;
24    }
25}