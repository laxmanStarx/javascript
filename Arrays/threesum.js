function three(arr){
    let result = [];
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length; i++){
        let j = i +1;
        let k = arr.length - 1
        if(i > 0 && arr[i] == arr[i-1]){
            continue;
        }
       

        while(j  < k){
            let sum = arr[i]  + arr[j] + arr[k];
            if(sum < 0){
                j ++ ;
            }else if( sum > 0){
                k --;
            }else{

                result.push(arr[i], arr[j], arr[k])
                j++;
                k--;

            }

            

            if(j < k && arr[j]  == arr[j-1]){

                 j++;
            }else if( j < k && arr[k] == arr[k-1]){
                k--
            }

        }

    }
    return result;

}

console.log(three([-1,0,1,9,-2,2,0]));