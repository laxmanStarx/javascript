function hello(arr,k){
    let maxSum = 0;
    let WindowSum = 0
    for(let i = 0; i < k ; i++){
        WindowSum += arr[i]
    }
    maxSum = WindowSum;
    
    for(let j = k; j < arr.length; j++){
        WindowSum += arr[j];
        WindowSum -= arr[j - k];

        maxSum = Math.max(maxSum,WindowSum);
        

    
}

return maxSum;
}

// let arr = [78,89,67,1,2,3,4,8,6];

console.log(hello([2,1,5,1,3,2], 3)); 
