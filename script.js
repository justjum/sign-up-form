// javascript to check passwords match

let passwordEntry = document.getElementById("password");
let passwordConfirm = document.getElementById("confirm-password").value;
let passwordMatch = "";

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
});

