/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head, pre = null;
    while(curr){
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre
};