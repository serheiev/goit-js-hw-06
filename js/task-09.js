const btn = document.querySelector(".change-color");
const outColor = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const someColor = getRandomHexColor();
  body.style.backgroundColor = someColor;

  outColor.textContent = someColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
