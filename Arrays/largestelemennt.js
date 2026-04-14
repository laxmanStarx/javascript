function largerelement(arr){
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(largerelement([2,8,89,67,60]));