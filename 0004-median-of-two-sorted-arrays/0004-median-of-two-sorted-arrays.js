/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let final=nums1.concat(nums2)
let final2 = final.sort((a, b) => a - b);
    if(final2.length%2!=0){
     let ind=Math.floor(final2.length/2)
     return final2[ind]   


    }else if(final2.length%2===0){
        let ind1=Math.floor((final2.length/2)-1)
        let ind2=Math.floor(final2.length/2)
        return (final2[ind1]+final2[ind2])/2
        
    }
};