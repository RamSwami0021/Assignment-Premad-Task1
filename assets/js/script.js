// JavaScript code for validation and functionality
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessageUser = document.getElementById("errorMessageUser");
  const errorMessagePass = document.getElementById("errorMessagePass");

  if (username === "") {
    errorMessageUser.textContent = "The email address or mobile number you entered isn't connected to an account. Find your account and log in.";
  } else  if (password === ""){
    errorMessagePass.textContent = "The password you entered isn't connected to an account. Find your account and log in.";
  } else {
    errorMessage.textContent = "";
  }
}

function openModal() {
  const modal = document.getElementById("signupModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("signupModal");
  modal.style.display = "none";
}

