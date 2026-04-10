#include<bits/stdc++.h>
using namespace std;

int maxWater(vector<int>& arr){
    int left = 0;
    int right = arr.size() - 1;
    int maxWaters = 0;

    while(left < right){
        int width = right - left;
         int h = min(arr[left], arr[right]);
        int Area = width * h;
        maxWaters = max(maxWaters,Area);
    
    if(arr[left] < arr[right]){
        left++;
    }else{
        right--; 
    }
}
    return maxWaters;

}

int main(){

        vector<int> arr = {1,8,6,2,5,4,8,3,7};

    cout << maxWater(arr);

    return 0;

}