document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate input
  if (email === "" || password === "") {
    document.getElementById('login-message').textContent = "Please fill in all fields.";
    return;
  }

  // Simulate a login process (you should replace this with actual API call)
  if (email === "test@example.com" && password === "password123") {
    document.getElementById('login-message').textContent = "Login successful!";
    document.getElementById('login-message').style.color = "green";
  } else {
    document.getElementById('login-message').textContent = "Invalid email or password.";
    document.getElementById('login-message').style.color = "red";
  }
});

// Simulate Google login (this is just a placeholder for a real Google OAuth implementation)
document.getElementById('google-login').addEventListener('click', function () {
  document.getElementById('login-message').textContent = "Google login is not implemented yet.";
  document.getElementById('login-message').style.color = "red";
});

