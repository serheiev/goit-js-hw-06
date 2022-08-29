const userNameInput = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", () => {
  userNameInput.value == ""
    ? (userNameOutput.textContent = "Anonymous")
    : (userNameOutput.textContent = userNameInput.value);
});
