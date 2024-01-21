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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    function bt(root){
        console.log(root)
        if(!root) return;
        bt(root.left);
        res.push(root.val)
        bt(root.right);
    }
    bt(root)
    return res
};