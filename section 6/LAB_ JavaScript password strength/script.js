function isStrongPassword(password) {
    // Check length of password
    if (password.length < 8) {
      return false;
    }
  
    // Check for "password" in password
    if (password.includes("password")) {
      return false;
    }
  
    // Check for at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // Password meets all criteria
    return true;
  }
  