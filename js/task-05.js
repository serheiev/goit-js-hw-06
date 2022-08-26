let userNameInput = document.querySelector("#name-input");
let userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", () => {
  userNameInput.value == ""
    ? (userNameOutput.textContent = "Anonymous")
    : (userNameOutput.textContent = userNameInput.value);
});
