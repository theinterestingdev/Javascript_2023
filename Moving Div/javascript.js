var a = 0;

setTimeout(function(){
    document.getElementById("myown").style.background= 'red';
}, 5000);

setInterval(function() {
    // a = a + 10;
    var div = document.getElementById("my");
    div.style.marginLeft = a + 'px';
}, 100);
