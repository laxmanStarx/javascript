function digit(num){

    var sum = 0;
    while(num > 0){
        let remainder = num%10;
        sum = sum + remainder
       num = Math.floor( num/10);
    }
     
        return sum;

    
}

let a = 234565
console.log(digit(a));