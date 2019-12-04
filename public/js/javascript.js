function changeRegistrationToLoginForm() {

    document.getElementById('registrationForm').style.display= "block" ;
    document.getElementById('loginForm').style.display= "none" ;
    document.getElementById('registrationIndicator').style.display= "block" ;
    document.getElementById('loginIndicator').style.display= "none" ;

}

function changeLoginToRegistrationForm() {

    document.getElementById('registrationForm').style.display= "none" ;
    document.getElementById('loginForm').style.display= "block" ;
    document.getElementById('registrationIndicator').style.display= "none" ;
    document.getElementById('loginIndicator').style.display= "block" ;

}
