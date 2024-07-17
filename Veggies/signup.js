const form = document.getElementById('form');
const Username = document.getElementById('username');
const Email = document.getElementById('Email or phone number');
const password = document.getElementById('password');
const password2 = document.getElementById('Confirm your Password');

form.addEventListener("submit",(e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs(){
    const UsernameValue = Username.Value.trim();
    const emailValue = Email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();

    if(Username === ''){
        setErrorfor(Username,"username cannot be blank");
    }else{
        setsuccessfor(Username);
    }

    if(emailValue === ''){
        setErrorfor(Username,"Email cannot be blank");
    }
}
function setErrorfor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelection('small');
    small.innertext = message;
    formcontrol.className = 'form-control error';
}
function setsuccessfor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success"
}
