const nameinput = document.getElementById('name');
const emailinput = document.getElementById('email');
const subjectinput = document.getElementById('subject');
const nameerror = document.getElementById('nameerror');
const subjecterror = document.getElementById('subjecterror');
const emailerror = document.getElementById('emailerror');
const messageinput = document.getElementById('message');
const messageerror = document.getElementById('messageerror');
const submit = document.getElementById('submit');

submit.addEventListener("click", function(e) {

    if (!nameinput.validity.valid) {
        nameerror.innerHTML = '';
        e.preventDefault();
        nameerror.innerHTML += `<strong>Please fill out your name</strong>`
        nameerror.style.display = "block";
    }
    if (nameinput.validity.tooShort) {
        nameerror.innerHTML = '';
        e.preventDefault();
        nameerror.innerHTML += `<strong>Please fill out your full name</strong>`
        nameerror.style.display = "block";

    }
    if (!emailinput.validity.valid) {
        emailerror.innerHTML = "";
        e.preventDefault();
        emailerror.innerHTML += `<strong>Please enter a valid e-mail</strong>`
        emailerror.style.display = "block";

    }
    if (!subjectinput.validity.valid) {
        subjecterror.innerHTML = "";
        e.preventDefault();
        subjecterror.innerHTML += `Please write a subject`
        subjecterror.style.display = "block";

    }
    if (subjectinput.validity.tooShort) {
        subjecterror.innerHTML = '';
        e.preventDefault();
        subjecterror.innerHTML = `<strong>The subject needs to be atleast 15 characters</strong>`
        subjecterror.style.display = "block";

    }
    if (!messageinput.validity.valid) {
        messageerror.innerHTML = "";
        e.preventDefault();
        messageerror.innerHTML += `Please write a message`
        messageerror.style.display = "block";

    }


    if (messageinput.validity.tooShort) {
        messageerror.innerHTML = '';
        e.preventDefault();
        messageerror.innerHTML = `<strong>The message needs to be atleast 25 characters</strong>`
        messageerror.style.display = "block";

    }
})