/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root
    let q = [];
    q.push(root);
    while(q.length!==0){
        let sez = q.length;
        for(let i=0;i<sez;i++){
            if(q[0].left){
                q.push(q[0].left)
                q.push(q[0].right)
            }
            if(i===sez-1){
                q.shift().next = null
            }else{
                q.shift().next = q[0]
            }
        }
    }
    return root
};

// q <- 1
