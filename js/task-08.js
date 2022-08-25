let form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

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
