function checkEmail() {
    var regExp = /'^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'/;
    if (regExp.test(document.getElementById('email').value)) {
        myAjaxFunction();
    } else {
        alert("Subscription unsuccessful. Please try again.");
    }
}

document.getElementById('age').onkeyup  = function() {
    var age_regex= new RegExp('[0-9][0-9][0-9]');
    if (age_regex.test(document.getElementById('age').value)) {
        document.getElementById("age").style.backgroundColor = 'red';
    } else {
        document.getElementById("age").style.backgroundColor = ' ';
    }
}

document.getElementById('name').onkeyup  = function() {
    var regExp = new RegExp('<');
    if (regExp.test(document.getElementById('name').value)) {
        document.getElementById("name").style.backgroundColor = 'red';
    } else {
        document.getElementById("name").style.backgroundColor = ' ';
    }
}

function myAjaxFunction() {
    alert("Subscription successful.");
    document.getElementById("name").reset();
    document.getElementById("age").reset();
    document.getElementById("email").reset();
}

function validate() {
    if (checkEmail()) {
        myAjaxFunction()
    } else {
        alert("The email provided is not valid. Please try again.)
    }

}


