// javascript to check passwords match

let passwordEntry = document.getElementById("password");
let passwordConfirm = document.getElementById("confirm-password").value;
let error1 = "";
let error2 = "";
let error3 = "";
let error4 = "";
let error5 = "";


const enterPassword = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const enterEmail = document.querySelector(".email");

enterPassword.addEventListener('click', function() {
    document.getElementById("password").setAttribute("minlength", "8");
    document.getElementById("password").setAttribute("class", "error");
});



enterPassword.addEventListener('keyup', function() {
    passwordEntry = document.getElementById("password").value;
    passwordConfirm = document.getElementById("confirm-password").value;
    passwordLength(passwordEntry);
    passwordCharacters(passwordEntry);
    passwordMatch(passwordEntry, passwordConfirm);
    document.getElementById("password-length").innerHTML=`${error1} <br> ${error3}`;
    document.getElementById("password-match").innerHTML=`${error2}`;
});



confirmPassword.addEventListener('click', function() {
    document.getElementById("confirm-password").setAttribute("minlength", "8");
    document.getElementById("confirm-password").setAttribute("class", "error");
});

confirmPassword.addEventListener('keyup', function() {
    passwordEntry = document.getElementById("password").value;
    passwordConfirm = document.getElementById("confirm-password").value;
    passwordLength(passwordEntry);
    passwordMatch(passwordEntry, passwordConfirm);
    document.getElementById("password-length").innerHTML=`${error1}`;
    document.getElementById("password-match").innerHTML=`${error2}`;
});


const passwordLength = function(currentPassword) {
    if(currentPassword.length < 8) {
        error1 = "Password must contain 8 or more characters"
    }
    else {
        error1 = "";
    }
    return error1;
}

const passwordMatch = function(passwordEntry, passwordConfirm) {
    if(passwordConfirm === "") {
        error2 = "";
    }
    else if (passwordConfirm === passwordEntry) {
        error2 = "";
    }
    else {
        error2 = "Passwords do not match"
    }
    return passwordMatch;
}

const passwordCharacters = function(currentPassword) {
    if (currentPassword.match("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])")) {
        error3 = "";
    }
    else {
        error3 = "Password must contain 1 uppercase, 1 lowercase, and 1 numeric character"
    }
}



enterEmail.addEventListener('keyup', function() {
    document.getElementById("email").setAttribute("class", "error");
});


/*  Below was the original password check.
- V2 developed to check for both length and match
- Possibly to also throw permanent error state

const enterPassword = document.querySelector(".password");

enterPassword.addEventListener('keyup', function() {
    passwordEntry = document.getElementById("password").value;
    passwordConfirm = document.getElementById("confirm-password").value;
    if(passwordConfirm === "") {
        passwordMatch = "";
    }
    else if(passwordConfirm === passwordEntry) {
        passwordMatch = "Passwords match";
    }
    else {
        passwordMatch = "Passwords do not match.";
    }
    document.getElementById("password-match").innerHTML=`${passwordMatch}`;
});

const confirmPassword = document.querySelector(".confirm-password");

confirmPassword.addEventListener('keyup', function() {
    passwordEntry = document.getElementById("password").value;
    passwordConfirm = document.getElementById("confirm-password").value;
    if(passwordConfirm === "") {
        passwordMatch = "";
    }
    else if(passwordConfirm === passwordEntry) {
        passwordMatch = "Passwords match";
    }
    else {
        passwordMatch = "Passwords do not match.";
    }
    document.getElementById("password-match").innerHTML=`${passwordMatch}`;
}); */