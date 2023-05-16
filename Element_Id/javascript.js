function hello() {
    document.getElementById("msg").innerHTML = "Welcome to the real JavaScript";
    document.getElementById("msg").style.color = "red";
}

// Call the function once the page is loaded
window.onload = hello;
