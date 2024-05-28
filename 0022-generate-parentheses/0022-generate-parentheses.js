/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [], st = [];
    function bt(openV, closedV){
        if(openV==n && closedV==n){
            res.push(st.join(""));
            return
        }
        if(openV<n){
            st.push("(");
            bt(openV+1, closedV);
            st.pop()
        }
        if(closedV<openV){
            st.push(")");
            bt(openV, closedV+1);
            st.pop()
        }
    }
    bt(0,0);
    return res
};