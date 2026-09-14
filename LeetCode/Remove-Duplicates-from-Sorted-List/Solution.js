1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} head
10 * @return {ListNode}
11 */
12
13    var deleteDuplicates = function(head) {
14    let current = head;
15
16    while (current !== null && current.next !== null) {
17        if (current.val === current.next.val) {
18            current.next = current.next.next;
19        } else {
20            current = current.next;
21        }
22    }
23
24    return head;
25
26};