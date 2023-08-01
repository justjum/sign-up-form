// javascript to check passwords match

let passwordEntry = document.getElementById("password");
let passwordConfirm = document.getElementById("confirm-password").value;
let error1 = "";
let error2 = "";


const enterPassword = document.querySelector(".password");


enterPassword.addEventListener('keyup', function() {
    passwordEntry = document.getElementById("password").value;
    passwordConfirm = document.getElementById("confirm-password").value;
    passwordLength(passwordEntry);
    passwordMatch(passwordEntry, passwordConfirm);
    document.getElementById("password-length").innerHTML=`${error1}`;
    document.getElementById("password-match").innerHTML=`${error2}`;
});

const confirmPassword = document.querySelector(".confirm-password");

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
        error1 = "Password too short"
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