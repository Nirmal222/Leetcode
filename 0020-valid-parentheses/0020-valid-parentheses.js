/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    for(let i=0;i<s.length;i++){
        if(st.length===0) st.push(s[i]);
        else if(st[st.length-1]=="(" && s[i]==")") st.pop();
        else if(st[st.length-1]=="{" && s[i]=="}") st.pop();
        else if(st[st.length-1]=="[" && s[i]=="]") st.pop();
        else st.push(s[i])
    }
    return st.length===0
};