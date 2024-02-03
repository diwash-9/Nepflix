function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');
  
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      errorMessage.textContent = 'All fields are required';
    } else if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match';
    } else {
      
      alert('Signup successful!'); 
    }
  }