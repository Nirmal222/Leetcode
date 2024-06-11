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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [], Q = [root];
    if(root === null) return [];    
    while(Q.length>0){
        let QSize = Q.length;
        let currentLevel = [];
        for(let i=0;i<QSize;i++){
            let currentNode = Q.shift();
            currentLevel.push(currentNode.val)
            if(currentNode.left) Q.push(currentNode.left)
            if(currentNode.right) Q.push(currentNode.right)
            
        }
        result.push(currentLevel)
    }
    return result
};