function firstlast(arr, target){

function firstOccurence(arr, target){

    let left = 0;
    let right = arr.length -1;
    let ans = -1;

    arr.sort((a,b) => a - b)

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] >= target){
            if(arr[mid] === target)
                 ans = mid;
            right = mid -1
            //   left = mid +1;
        }else{
            left = mid +1;
            // right = mid -1;
        }

    }

    return ans;
}


  


function lastOccurrence(arr, target){
    let left = 0;
    let right = arr.length - 1
    let ans = -1

        

    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(arr[mid] <= target){

            if(arr[mid] === target)
                 ans = mid;

            left = mid + 1;
            // right = mid -1

        }else{
            right = mid -1;
            //   left = mid +1;
        }

        
    }
    return ans;
}
return [firstOccurence(arr, target), lastOccurrence(arr,target)]
}

console.log(firstlast([44,88,67,78,88,54], 88));
console.log(firstlast([], 0));

    
      