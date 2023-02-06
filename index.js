
const email    = document.querySelector('#email');
const zipCode  = document.querySelector('#zip');
const country  = document.querySelector('#country');
const password = document.querySelector('#password');

const confirmPassword = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');





form.addEventListener('change', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    console.log(password.value)

});


const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};



document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var passwordConfirmationInput = document.getElementById('passwordConfirmation');
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