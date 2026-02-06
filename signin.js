const form = document.querySelector(".signin-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  errorMsg.style.display = "none";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const name = nameInput.value.trim();

  if (email === "") {
    showError("Email is required");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
  let emailans = emailRegex.test(email);
  let passwordans = passwordRegex.test(password); 

  if (!emailans) {
    showError("Please use a valid email");
    return;
  }

  if (password === "") {
    showError("Password is required");
    return;
  }

  if (!passwordans) {
    showError("Password is incorrect");
    return;
  }


  alert("Form validated successfully!");
});

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
