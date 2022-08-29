const inp = document.querySelector("#font-size-control");
const out = document.querySelector("#text");
out.style.fontSize = inp.value + "px";
inp.addEventListener("input", () => {
  out.style.fontSize = inp.value + "px";
});
