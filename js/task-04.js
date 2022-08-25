let btnMinus = document.querySelector("[data-action='decrement']");
let btnPlus = document.querySelector("[data-action='increment']");
let counterValue = document.querySelector("#value");
counterValue.textContent = 0;
btnMinus.addEventListener("click", () => {
  counterValue.textContent--;
});
btnPlus.addEventListener("click", () => {
  counterValue.textContent++;
});
