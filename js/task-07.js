// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет
//  инлайн-стиль span#text обновляя свойство font-size.
//   В результате при перетаскивании ползунка будет меняться размер текста.

let inp = document.querySelector("#font-size-control");
let out = document.querySelector("#text");
out.style.fontSize = inp.value + "px";
inp.addEventListener("input", () => {
  out.style.fontSize = inp.value + "px";
});
