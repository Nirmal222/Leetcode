/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function bt(left,right){
        if((!left && !right)) return true;
        if((!left || !right)) return false;
        return left.val===right.val && bt(left.left, right.right) && bt(left.right, right.left)
    }
    return bt(root.left, root.right)
};