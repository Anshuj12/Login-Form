function test(){
    var name = document.getElementById('UID').value;
    var ph=document.getElementById('Pho').value;
    var ag=document.getElementById('ag').value;
    var pd=document.getElementById('pswd').value;
    var eml=document.getElementById('em').value;

    var name_valid = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var phone_valid = /^\d{10}$/;
    var email_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass_valid=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(name==""|| ph==""||ag==""||pd==""||eml==""){
        alert("Please fill the required Fields")
    }
    
    else{

        if(!name_valid.test(name)){
            alert('Please enter your full name (Name and Surname) , No digits and No special characater and camel case only');
            }

        if(!eml.match(email_valid)){
                alert("Enter the valid Email Address ")
            }

        if(!ph.match(phone_valid)){
            alert("Please Enter Valid Mobile number upto 10 digits ,no alphabets are allowed ")
        }
        
        if (isNaN(ag)||ag<1||ag>100){
 
            alert("The age must be a number between 1 and 100");
        }

        if(!pd.match(pass_valid)){
            alert("A password should be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
        }

        if(name_valid.test(name) && eml.match(email_valid) && ph.match(phone_valid) && !(isNaN(ag)||ag<1||ag>100) && pd.match(pass_valid)){
            alert("You have been Registerd Successfully")
        }
    }
    
}
function empty(){
    var name = document.getElementById('UID').value;
    var ph=document.getElementById('Pho').value;
    var ag=document.getElementById('ag').value;
    var pd=document.getElementById('pswd').value;
    var eml=document.getElementById('em').value;
    
    if(name==""|| ph==""||ag==""||pd==""||eml==""){
        alert("No Data filled for submission , please fill the required fields")
    }
}



