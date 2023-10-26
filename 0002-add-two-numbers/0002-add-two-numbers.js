/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, c1 = l1, c2 = l2, res = new ListNode(3,null);
    let p = res;
    while(c1 || c2 || carry){
        let sum = (c1?c1.val:0)+(c2?c2.val:0)+carry;
        carry = Math.floor(sum/10);
        sum = sum%10
        p.next = new ListNode((sum),null);
        p = p.next
        c1 = c1?c1.next:null;
        c2 = c2?c2.next:null;
    }
    return res.next
};