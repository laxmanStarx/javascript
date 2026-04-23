function myfunction(x,y){

    return x * y;

}

console.log(myfunction(5,10))

//function anonomus

const myfunctions = function(x,y){

    return x * y;

}
console.log(myfunctions(5,100))

//function constructor

const fruits = new Function("x", "y", "return x * y")

const obj = {
     fruits(x ,y){
        return x*y;
    }
}
console.log(obj.fruits(10,20))
