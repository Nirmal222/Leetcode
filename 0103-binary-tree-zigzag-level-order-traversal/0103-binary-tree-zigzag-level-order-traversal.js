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
var zigzagLevelOrder = function(root) {
    let result = [], Q = [root], flag = 0;
    if(root===null) return result;
    while(Q.length!==0){
        let QSize = Q.length;
        let currentLevel = [];
        for(let i=0;i<QSize;i++){
            let currentNode = Q.shift();
            if(currentNode.left) Q.push(currentNode.left);
            if(currentNode.right) Q.push(currentNode.right);
            currentLevel.push(currentNode.val)
        }
        if(flag===0){
            result.push(currentLevel)
            flag = 1
        }else{
            currentLevel.reverse();
            result.push(currentLevel)    
            flag = 0
        }
    }
    return result;
};