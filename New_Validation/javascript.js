function valid()
        {
            var uname,pass,cpass,phno;
            uname=document.getElementById("uname");
            pass=document.getElementById("pass");
            cpass=document.getElementById("cpass");
            phno=document.getElementById("phno");
            
           if(isNaN(phno.value))
           {
            alert("Please Enter Phone Number in numeric")
            document.getElementById("phno").style.border="2px red solid";
            document.getElementById("phno_err").innerHTML="Please Enter Phone Number in numeric"
            return false;
           }
           if(phno.value.length!=10)
           {
            alert("Please Enter Correct Phone Number ")
            document.getElementById("phno").style.border="2px red solid";
            document.getElementById("phno_err").innerHTML="Please Enter Enter Correct Phone Number"
            return false;
           }

          if(city.value=="Select City")
           {
            alert("Please Select City")
            document.getElementById("city").style.border="2px red solid";
            document.getElementById("city_err").innerHTML="Please Select City"
            return false;
           }
           
           else
           {
            alert("Form Submit Sucessfully")
            
           }
        }