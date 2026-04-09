function maxSum(arr, k)
{
    let windowSum = 0;
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for(let i = k; i<arr.length; i++){
        windowSum += arr[i];
        windowSum -= arr[i - k];

        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum;
}

console.log(maxSum([2,1,5,1,3,2], 3)); 