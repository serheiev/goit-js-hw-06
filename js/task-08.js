const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Введите логин и пароль");
  }
  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  e.currentTarget.reset();
});
