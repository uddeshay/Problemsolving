/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let str=x.toString();
let arr=str.split("");
let final=[]
for(let i=arr.length-1;i>=0;i--){
    final.push(arr[i])
    

}
str=final.join("")
if(str===x.toString()){
    return true;
}else{
    return false;
}
    
};