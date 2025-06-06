/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlength=0;
    for(let i=0;i<s.length;i++){
        let temp=[]
    for(let j=i;j<s.length;j++){
        if(temp.includes(s[j])){
            break
        }else{
            temp.push(s[j])
        }

    } 
    if(temp.length>maxlength){
        maxlength=temp.length
    }    
    }
    return maxlength
    
};