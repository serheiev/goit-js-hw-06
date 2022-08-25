let inp = document.querySelector("#name-input");
let out = document.querySelector("#name-output");

inp.addEventListener("input", () => {
  if (inp.value == "") {
    out.textContent = "Anonymous";
  } else {
    out.textContent = inp.value;
  }
});
