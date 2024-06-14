/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = {};
    for(let i=0;i<inorder.length;i++){
        map[inorder[i]] = i
    }
    function buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd, map){
        if(preStart>preEnd || inStart>inEnd) return null;
        let root = new TreeNode(preorder[preStart]);
        let inRoot = map[root.val];
        let numsLeft = inRoot - inStart;
        root.left = buildTree(preorder, preStart+1, preStart+numsLeft, inorder, inStart, inRoot-1, map);
        root.right = buildTree(preorder, preStart+numsLeft+1, preEnd, inorder, inRoot+1, inEnd, map);
        return root;
    }
    return buildTree(preorder, 0, preorder.length-1, inorder, 0 , inorder.length-1, map);
};