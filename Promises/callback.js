function processUserInput(callback) {
    let name = "Vaibhav"
    callback(name)
}

processUserInput(function(name) {
    console.log("Hello " + name)
})