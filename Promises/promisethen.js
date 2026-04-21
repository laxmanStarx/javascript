let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // alert("I m a promise and i m fulfilled")
        resolve(true)
       
        console.log("nightangle is sitting on the tree on the sunny summer")
    },8000)
})


// let p2 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         alert("I m a promise and i m fulfilled")
//         resolve(true)
       
//         console.log("nightangle is sitting on the tree on the sunny summer")
//     },6000)
// })





let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // alert("I m a promise and i m fulfilled")
        resolve(true)
         console.log("nightangle is sitting on the tree on the sunny summer")
        reject(new Error("I am an error"))
        // console.log("nightangle is sitting on the tree on the sunny summer")
    },6000)
})

// p2.then((value)=>{
//     console.log(value)
// })

// p.catch((error)=>{
//     console.log("some errors are occured in p2")
// })

p.then((value)=>{
    console.log(value)
},(error)=>{
 console.log(error)
})




console.log("hello")
// console.log(p)