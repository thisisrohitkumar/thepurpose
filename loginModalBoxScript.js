const loginBtn = document.getElementById("login");

const closeLoginModal = document.getElementById("closeLoginModal");

const phoneErr = document.getElementById("phoneErr");

const passErr = document.getElementById("passErr");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

function validateLogin() {
  if (phone.value == "") {
    phoneErr.innerHTML = "Phone No. / Email is Required";
    phoneErr.style.visibility = "visible";
    phone.style.border = "1px solid red";
  } else if (phone.value != "purpose") {
    phoneErr.innerHTML = "Invalid Phone No. / Email";
    phoneErr.style.visibility = "visible";
    phone.style.border = "1px solid red";
  } else {
    phoneErr.style.visibility = "hidden";
    phone.style.border = "1px solid green";
  }

  if (password.value == "") {
    passErr.innerHTML = "Password is Required";
    passErr.style.visibility = "visible";
    password.style.border = "1px solid red";
  } else if (password.value != "qwerty") {
    passErr.innerHTML = "Incorrect Password";
    passErr.style.visibility = "visible";
    password.style.border = "1px solid red";
  } else {
    passErr.style.visibility = "hidden";
    password.style.border = "1px solid green";
  }
}

function closeLoginModalBox() {
  document.getElementById("loginModalContainer").style.display = "none";
}
