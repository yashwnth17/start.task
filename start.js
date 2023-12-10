
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
  }
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
   function validateEmail(email) {
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function submitLogin(event) {
    event.preventDefault();
  
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    
    if (validateEmail(username) && password.length >= 1 && password.length <= 10) {
      alert('Login successful!');
      closeModal();
     
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
 
  window.onload = openModal;
  