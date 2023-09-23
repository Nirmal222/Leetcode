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
    function checkSymmetry(cN1, cN2){
        if(!cN1 && !cN2) return true
        if(!cN1 || !cN2) return false
        return cN1.val==cN2.val && checkSymmetry(cN1.left, cN2.right) && checkSymmetry(cN1.right, cN2.left)
    }
    return checkSymmetry(root.left, root.right)
};