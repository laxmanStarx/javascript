// isWellFormed()
// The isWellFormed() method returns true if a string is well formed.

// Otherwise it returns false.

// A string is not well formed if it contains lone surrogates.



let text = "hello world!"

let wells = text.isWellFormed()
console.log(wells)



// let texts = "Hello World \uD800";
// let result = text.isWellFormed();
// console.log(result)

// output: false