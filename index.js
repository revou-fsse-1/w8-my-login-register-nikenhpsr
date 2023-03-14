const attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "admin@nikenhpsr.site" && password == "Admin#123") {
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("login").disabled = true;
      return false;
    }
  }
}
