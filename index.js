// Define regular expressions for the email and password
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Get the form element
const form = document.getElementById("login");

// Get the form inputs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Add an event listener to the form when it is submitted
form.addEventListener("submit", function(event) {
  // Check if the email and password inputs are empty
  if (emailInput.value === "" || passwordInput.value === "") {
    // Prevent the form from being submitted
    event.preventDefault();
    
    // Display an error message
    if (emailInput.value === "") {
      emailInput.nextElementSibling.textContent = "Please enter your email address";
    }
    if (passwordInput.value === "") {
      passwordInput.nextElementSibling.textContent = "Please enter your password";
    }
  } else {
    // Check if the email and password are correct
    if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value)) {
      // Redirect the user to the homepage
      window.location.href = "../homepage/homepage.html";
    } else {
      // Display an error message
      if (!emailRegex.test(emailInput.value)) {
        emailInput.nextElementSibling.textContent = "Please enter a valid email address";
      }
      if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.nextElementSibling.textContent = "Password must contain at least one lowercase letter, one uppercase letter, and be at least 8 characters long";
      }
      // Prevent the form from being submitted
      event.preventDefault();
    }
  }
});

// Add an event listener to each input to clear the error message when the input is changed
emailInput.addEventListener("input", function() {
  emailInput.nextElementSibling.textContent = "";
});

passwordInput.addEventListener("input", function() {
  passwordInput.nextElementSibling.textContent = "";
});

localStorage.setItem("user@mail.com", "Password123");