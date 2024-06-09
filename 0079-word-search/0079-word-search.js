/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(i,j,pos){
        if(pos===word.length) return true;
        if( i>=board.length || j>=board[0].length || i<0 || j<0 ) return false
        if(board[i][j]!==word[pos]) return false;
        let temp = board[i][j];
        board[i][j] = '*'
        if(dfs(i+1, j, pos+1) || dfs(i-1, j, pos+1) || dfs(i, j+1, pos+1) || dfs(i, j-1, pos+1)){
            return true
        }
        board[i][j] = temp;
        return false
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(word[0]===board[i][j] && dfs(i,j,0)) return true
        }
    }
    return false;
};