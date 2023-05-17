
function valid()
{

    var uname = document.getElementById("uname");
    var uname = document.getElementById("uname_err");
    var uname = document.getElementById("pass1");
    var uname = document.getElementById("pass2");
    if (uname.value=="")
    {
        alert("Please enter the name")
        document.getElementById("uname").styleborder='2px red solid';
        document.getElementById("uname_err").style.visibility='visible';
        document.getElementById("passwd_err1").style.visibility='visible';
        document.getElementById("passwd_err2").style.visibility='visible';
        return false;
    }
    
    else
    {
        alert("Successfully submit");
    }
    

}
