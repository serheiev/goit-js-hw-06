const btnMinus = document.querySelector("[data-action='decrement']");
const btnPlus = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
btnMinus.addEventListener("click", () => {
  counterValue.textContent--;
});
btnPlus.addEventListener("click", () => {
  counterValue.textContent++;
});
