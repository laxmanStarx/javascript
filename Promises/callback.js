// function processUserInput(callback) {
//     let name = "Vaibhav"
//     callback(name)
// }

// processUserInput(function(name) {
//     console.log("Hello " + name)
// })

// function calculate(a, b, operation) {
//     return operation(a, b)
// }

// function add(x, y) {
//     return x + y
// }

// function multiply(x, y) {
//     return x * y
// }

// console.log(calculate(2, 3, add))       // 5
// console.log(calculate(2, 3, multiply))  // 6



setTimeout(() => {
    console.log("Step 1")
    setTimeout(() => {
        console.log("Step 2")
        setTimeout(() => {
            console.log("Step 3")
        }, 1000)
    }, 1000)
}, 1000)