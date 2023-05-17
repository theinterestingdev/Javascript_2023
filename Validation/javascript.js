function valid() {
    var uname = document.getElementById("uname");
    var uname_err = document.getElementById("uname_err");
    var pass = document.getElementById("pass");
    var pass_err = document.getElementById("pass_err");
    var cpass = document.getElementById("cpass");
    var pass_err_length = document.getElementById("pass_err_length");

    if (uname.value.trim() == "") 
    {
        uname_err.style.visibility = 'visible';
        return false;
    } 
    else
    {
        uname_err.style.visibility = 'hidden';
    }

    if (pass.value.trim() == "")
    {
        pass_err.style.visibility = 'visible';
        return false;
    } 
    else 
    {
        pass_err.style.visibility = 'hidden';
    }

    if (pass.value.length < 6)
    {
        pass_err_length.style.visibility = 'visible';
        return false;
    }
    else
    {
        pass_err_length.style.visibility = 'hidden';
    }

    if (pass.value != cpass.value)
    {
        alert("Passwords do not match");
        return false;
    }

    alert("Successfully submitted");
    return true;
}
