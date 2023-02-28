function checkForm() {
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('passwordConfirm');
  const formErrorsDiv = document.getElementById('formErrors');
  
  let fullName = fullNameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  let passwordConfirm = passwordConfirmInput.value.trim();
  let errors = [];

  if (fullName.length < 1) {
    errors.push('Missing full name.');
    fullNameInput.classList.add('error');
  } else {
    fullNameInput.classList.remove('error');
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if (!emailRegex.test(email)) {
    errors.push('Invalid or missing email address.');
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  const lowercaseRegex = /[a-z]/;
  if (password.length < 10 || password.length > 20) {
    errors.push('Password must be between 10 and 20 characters.');      
    passwordInput.classList.add('error');
  } 

  if (!lowercaseRegex.test(password)) {
    errors.push('Password must contain at least one lowercase character.');
    passwordInput.classList.add('error');
  } 

  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    errors.push('Password must contain at least one uppercase character.');
    passwordInput.classList.add('error');
  } 

  const digitRegex = /[0-9]/;
  if (!digitRegex.test(password)) {
    errors.push('Password must contain at least one digit.');
    passwordInput.classList.add('error');
  } 

  if (password !== passwordConfirm) {
    errors.push('Password and confirmation password don\'t match.');
    passwordConfirmInput.classList.add('error');
  } else {
    passwordConfirmInput.classList.remove('error');
  }
  
  if (errors.length > 0) {
    formErrorsDiv.innerHTML = '';
    const errorList = document.createElement('ul');
    errors.forEach(error => {
        const errorListItem = document.createElement('li');
        errorListItem.textContent = error;
        errorList.appendChild(errorListItem);
      });
    formErrorsDiv.appendChild(errorList);
    formErrorsDiv.classList.remove('hide');
  } 

  else {
    formErrorsDiv.classList.add('hide');
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});