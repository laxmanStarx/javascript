function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hogwarts")
        }, 2000)
    })
}

async function fetchData() {
    let result = await getData()
    console.log(result)
}

fetchData()