let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // alert("I m a promise and i m fulfilled")
        // resolve(true)
        reject(new Error("I am an error"))
        // console.log("nightangle is sitting on the tree on the sunny summer")
    },6000)
})

console.log("hello")
console.log(p)