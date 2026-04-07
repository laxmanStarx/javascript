let obj = {
    harry: 90,
    shubh: 68,
    voldemort: 56,
    shiv: 98

}

n = 40;
sum = 0;

for(var i = 0; i < n; i++){
    sum += (i+1)

}

console.log("sum of first  " +  n + " natural numbers are "+ sum )


for(let a in obj){
    console.log("Marks of "+ a + " are " + obj[a]);
}

for(let b of "harry"){
    console.log(b);
}

