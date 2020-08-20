const signUpButton = document.querySelector("#signUpButton");
const signUpForm = document.querySelector("#userSignUp");

function gotToSignUp () {
    userSignUp.classList.toggle("hidden");
}

signUpButton.addEventListener("click", gotToSignUp);