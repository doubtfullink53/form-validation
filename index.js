
const emailEl   = document.querySelector('#email');
const zipCode  = document.querySelector('#zip');
const country  = document.querySelector('#country');
const passwordEl = document.querySelector('#password');

const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');





form.addEventListener('input', function (e) {
    // prevent the form from submitting
    e.preventDefault();

switch (e.target.id) {
  case 'zip':
      checkZip();
      break;
  case 'email':
      checkEmail();
      break;
  case 'password':
      checkPassword();
      break;
  case 'confirm-password':
      checkConfirmPassword();
      break;
}

});


const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const te = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return te.test(email);
};


const isZipValid = (email) => {
  const te = /^\d{5}(-\d{4})?$/;
  return te.test(email);
};


const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


// input warnings   for bootstrap border-danger for fail and border-primary for success

const showError = (input, message) => {

  
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  // formField.classList.remove('border-primary');
  input.classList.add('border-danger');

  // show the error message
  
  const error = formField.querySelector('small');
 
  error.style.color = "red";
  error.textContent = message;
  
};


const showSuccess = (input) => {

  const formField = input.parentElement;
  // remove the error class
  input.classList.remove('border-danger');
  input.classList.add('border-primary');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}


// validate email 
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.')
  } else {
      showSuccess(emailEl);
      valid = true;
  }
  return valid;
}


// validate zip code 
const checkZip = () => {
  let valid = false;
  const zip = zipCode.value.trim();
  if (!isRequired(zip)) {
      showError(zipCode, 'Zip code cannot be blank.');
  } else if (!isZipValid(zip)) {
      showError(zipCode, 'Zip code is not valid. Please Enter a valid 5 digit zip code')
  } else {
      showSuccess(zipCode);
      valid = true;
  }
  return valid;
}

// check password 

const checkPassword = () => {

  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
      showError(passwordEl, 'Password cannot be blank.');
  } else if (!isPasswordSecure(password)) {
      showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
      showSuccess(passwordEl);
      valid = true;
  }

  return valid;
};
// check to confirm password
const checkConfirmPassword = () => {
  let valid = false;
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
      showError(confirmPasswordEl, 'Please enter the password again');
  } else if (password !== confirmPassword) {
      showError(confirmPasswordEl, 'Passwords do not match');
  } else {
      showSuccess(confirmPasswordEl);
      valid = true;
  }

  return valid;
};

// show and hide password on click of eye icons

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var passwordConfirmationInput = document.getElementById('confirm-password');
    document.getElementById('togglePassword').addEventListener('click', function() {
      if (passwordInput.getAttribute('type') === 'password') {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
        passwordInput.setAttribute('type', 'text');
      } else {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
        passwordInput.setAttribute('type', 'password');
      }
    });
    document.getElementById('togglePasswordConfirmation').addEventListener('click', function() {
      if (passwordConfirmationInput.getAttribute('type') === 'password') {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
        passwordConfirmationInput.setAttribute('type', 'text');
      } else {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
        passwordConfirmationInput.setAttribute('type', 'password');
      }
    });
  });

