// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border
// инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

let inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
  if (inp.value.length > inp.dataset.length) {
    inp.classList.add("invalid");
  } else {
    inp.classList.add("valid");
  }
});
