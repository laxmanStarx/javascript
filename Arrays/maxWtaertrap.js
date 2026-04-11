function trapWater(arr)
{

   

    let left = 0;
    let right = arr.length - 1;
    let maxWater = 0;
    while(left < right)
    {
        let height = Math.min(arr[left], arr[right]);
        let maxArea = (right - left) * height;
        maxWater = Math.max(maxArea,maxWater);

        if(arr[left] < arr[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;

}
let arr = [2,3,4,5,6,78]



console.log(trapWater(arr))