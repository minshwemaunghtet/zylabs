function checkForm() {
   const form = document.querySelector('form');
   const fullNameInput = document.getElementById('fullName');
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const passwordConfirmInput = document.getElementById('passwordConfirm');
   const formErrors = document.getElementById('formErrors');
   formErrors.innerHTML = '';
   let hasErrors = false;
 
   // Validate full name
   if (fullNameInput.value.trim().length < 1) {
     const error = document.createElement('li');
     error.textContent = 'Missing full name.';
     formErrors.appendChild(error);
     fullNameInput.classList.add('error');
     hasErrors = true;
   } else {
     fullNameInput.classList.remove('error');
   }
 
   // Validate email
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(emailInput.value.trim())) {
     const error = document.createElement('li');
     error.textContent = 'Invalid or missing email address.';
     formErrors.appendChild(error);
     emailInput.classList.add('error');
     hasErrors = true;
   } else {
     emailInput.classList.remove('error');
   }
 
   // Validate password
   const password = passwordInput.value.trim();
   if (password.length < 10 || password.length > 20) {
     const error = document.createElement('li');
     error.textContent = 'Password must be between 10 and 20 characters.';
     formErrors.appendChild(error);
     passwordInput.classList.add('error');
     hasErrors = true;
   } else if (!/[a-z]/.test(password)) {
     const error = document.createElement('li');
     error.textContent = 'Password must contain at least one lowercase character.';
     formErrors.appendChild(error);
     passwordInput.classList.add('error');
     hasErrors = true;
   } else if (!/[A-Z]/.test(password)) {
     const error = document.createElement('li');
     error.textContent = 'Password must contain at least one uppercase character.';
     formErrors.appendChild(error);
     passwordInput.classList.add('error');
     hasErrors = true;
   } else if (!/\d/.test(password)) {
     const error = document.createElement('li');
     error.textContent = 'Password must contain at least one digit.';
     formErrors.appendChild(error);
     passwordInput.classList.add('error');
     hasErrors = true;
   } else {
     passwordInput.classList.remove('error');
   }
 
   // Validate password confirmation
   if (passwordInput.value !== passwordConfirmInput.value) {
     const error = document.createElement('li');
     error.textContent = "Password and confirmation password don't match.";
     formErrors.appendChild(error);
     passwordConfirmInput.classList.add('error');
     hasErrors = true;
   } else {
     passwordConfirmInput.classList.remove('error');
   }
 
   if (hasErrors) {
     formErrors.style.display = 'block';
   } else {
     formErrors.style.display = 'none';
   }
 }

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});