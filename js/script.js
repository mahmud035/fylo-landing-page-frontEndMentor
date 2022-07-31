'use strict';

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const error = document.getElementById('error');

  if (email.match(emailFormat)) {
    return true;
  } else {
    error.innerHTML = 'Please check your email';
    error.classList.add('error-message');
    return false;
  }
}

function validateSignUpEmail() {
  const signUpEmail = document.getElementById('sign-up-email').value;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorText = document.getElementById('error-text');

  if (signUpEmail.match(emailFormat)) {
    return true;
  } else {
    errorText.innerHTML = 'Please check your email';
    errorText.classList.add('error-message');
    return false;
  }
}
