function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="123")
    {
        alert("succesfully logined");
        window.open("module1.html")
        return false;
    }
    else
    {
        alert("Incorrect Email id or Password")

    }
}

function process() 
{
    window.open ("signup.html");
}
