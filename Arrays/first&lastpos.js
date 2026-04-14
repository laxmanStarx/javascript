function firstLast(arr, target){

    // let result = [];

    
        if(arr.length === 0){
            return [-1,-1]
        }

        let first = -1;
        let last = -1;

    for(let i = 0; i < arr.length; i++){


  
         if(arr[i] === target ){
            if(first === -1){
                first = i;
            }
            last = i;
  
        }

    }

    return result

}

console.log(firstLast([], 0))