function loadScript(src){
    var script = document.createElement("script");
    script.src = src

    script.onload = function(){
        console.log("Loaded script with src: " + src)
    }
    document.body.appendChild(script)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" )