//function Parameters


function greet(name = "Guest"){
    console.log(name)
}

greet()


function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(78,89))