function hello( arr,  k){

    let maxSum = 0;
     maxWindow = 0;

    for(let i = 0; i < k; i++){
        maxWindow +=arr[i];
    }
    maxSum = maxWindow;

    for(let i = k; i < arr.length; i++){
        maxWindow +=arr[i];
        maxWindow -=arr[i-k];
        maxSum = Math.max(maxSum, maxWindow);
    }
    return maxSum;

}
// console.log(hello([45,7,5,35,90,89,45],3))
console.log(hello([2,2,3,4,5,6,7,8], 3)); 
