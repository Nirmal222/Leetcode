/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let c1 = list1, c2 = list2, res = new ListNode(0,null), p = res;
    while(c1 && c2){
        if(c1.val>=c2.val){
            p.next = new ListNode(c2.val, null);
            p = p.next
            c2 = c2.next;
        }else{
            p.next = new ListNode(c1.val, null);
            p = p.next
            c1 = c1.next;
        }
    }
    if(c1) p.next = c1
    else p.next = c2
    return res.next
};