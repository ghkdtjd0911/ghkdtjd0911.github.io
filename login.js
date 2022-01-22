const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const welcome = document.getElementById("welcome");

function checkIfLogin() {
  if (localStorage.getItem("username") !== null) {
    const username = localStorage.getItem("username");
    loginForm.classList.add("hide");
    welcome.innerHTML = `Welcome ${username}`;
    welcome.classList.remove("hide");
  }
}

checkIfLogin();

function onLoginSubmit() {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  checkIfLogin();
}

loginForm.addEventListener("submit", onLoginSubmit);
