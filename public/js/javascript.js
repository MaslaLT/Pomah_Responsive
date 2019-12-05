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

function validateFormRegistration() {
    var name = document.forms["registrationForm"]["firstName"].value;
    var mail = document.forms["registrationForm"]["email"].value;
    var pass = document.forms["registrationForm"]["password"].value;

    if (name || mail || pass == "") {
        if (name == "") {
            document.getElementById('registrationFormUsernameCheckbox').style.background = "red";
        } else {
            document.getElementById('registrationFormUsernameCheckbox').style.background = "green";
        }
        if (mail == "") {
            document.getElementById('registrationFormEmailCheckbox').style.background = "red";
        } else {
            document.getElementById('registrationFormEmailCheckbox').style.background = "green";
        }
        if (pass == "") {
            document.getElementById('registrationFormPasswordCheckbox').style.background = "red";
        } else {
            document.getElementById('registrationFormPasswordCheckbox').style.background = "green";
        }
        return false;
    }
}

function validateFormLogin() {
    var mail = document.forms["registrationForm"]["email"].value;
    var pass = document.forms["registrationForm"]["password"].value;

    if (name || mail || pass == "") {
        if (name == "") {
            document.getElementById('loginFormUsernameCheckbox').style.background = "red";
        } else {
            document.getElementById('loginFormUsernameCheckbox').style.background = "green";
        }
        if (mail == "") {
            document.getElementById('loginFormEmailCheckbox').style.background = "red";
        } else {
            document.getElementById('loginFormEmailCheckbox').style.background = "green";
        }
        if (pass == "") {
            document.getElementById('loginFormPasswordCheckbox').style.background = "red";
        } else {
            document.getElementById('loginFormPasswordCheckbox').style.background = "green";
        }
        return false;
    }
}

function navbarLoginPopup(){
    document.getElementById('loginFormUsernameCheckbox').style.background = "red";
}