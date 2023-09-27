/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head;
    while(p1 && p1.next){
        head = head.next
        p1 = p1.next.next;
        if(p1==head) return true
    }
    return false
    
};