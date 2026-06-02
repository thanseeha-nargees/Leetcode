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
12var reverseList = function(head) {
13    let prev = null;
14    let current = head;
15
16    while(current !== null){
17
18        let next = current.next;
19
20        current.next = prev;
21
22        prev = current;
23
24        current = next;
25    }
26
27    return prev;
28};