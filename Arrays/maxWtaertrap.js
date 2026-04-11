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
let arr = [78,56,54,67,3,8,9,2]



console.log(trapWater(arr))