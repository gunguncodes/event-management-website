const form = document.querySelector(".signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("name");
const confirmInput = document.getElementById("confirm");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    errorMsg.style.display = "none";

    const email = emailInput.value.trim();
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirm = confirmInput.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const nameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)?(?:\s[A-Za-z]+(?:[-'][A-Za-z]+)?)+$/;
    
    let isValidemail = emailRegex.test(email);
    let isValidpass = passwordRegex.test(password);
    let isValidname = nameRegex.test(name);

    if(email === "") {
        showError("Email is required");
        return;
    }

    if(!isValidemail) {
        showError("Please use a valid email");
        return;
    }

    if(name === "") {
        showError("Name is required")
        return;
    }

    /*if(!isValidname) {
        showError("Please enter a valid name");
        return;
    }*/

    if(password === "") {
        showError("Password is required");
        return;
    }

    if(!isValidpass) {
        showError("Password must be 8+ chars with uppercase, lowercase, number & symbol");
        return;
    }

    if(password!=confirm) {
        showError("Passwords do not match");
        return;    
    }

    let usersData = localStorage.getItem("users");

    let users;
    if (usersData === null) {
        users = [];
     } else {
         users = JSON.parse(usersData);
    } 

   let userAlreadyExists = false;

   for (let i = 0; i < users.length; i++) {
   if (users[i].email === email) {
      userAlreadyExists = true;
      break;
     }
    }

   if (userAlreadyExists === true) {
      showError("User already exists");
      return;
    }

   let newUser = {
     name: name,
     email: email,
     password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "signin.html";
});

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.style.display = "block"
}