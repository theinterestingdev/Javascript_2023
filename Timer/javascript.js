setInterval(function() {
    var d = new Date();
    document.getElementById("show").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}, 1000);
