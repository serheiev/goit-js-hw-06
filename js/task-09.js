const btn = document.querySelector(".change-color");
const outColor = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  outColor.textContent = body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
