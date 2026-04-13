function hello(arr, k){
    let windowSum = 0;
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i];

    }
    maxSum = windowSum;

    for(let j = k; j < arr.length; j++){
        windowSum += arr[j]
        windowSum -= arr[j - k];
        maxSum = Math.max(windowSum , maxSum)
        }
        return maxSum;
    
}

console.log(hello([2,1,5,1,3,2], 3))