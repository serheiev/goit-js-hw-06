const inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
  if (inp.value.length == inp.dataset.length) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.add("invalid");
  }
});
