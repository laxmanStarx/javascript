 const loadScript = (src) =>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        script.onload = ()=>{
            resolve(1)
        }
        script.onerror = () =>{reject(0)}
    })
    let p1 = loadScript("https://planet-food-992n.vercel.app/")
    p1.then((value)=>{
        console.log(value)
    }).catch((error)=>{
        console.log("we are sorry but we are having problems")
    })
 }

 //this will not run because i didn't crete like (html, javascript which shows on browser)