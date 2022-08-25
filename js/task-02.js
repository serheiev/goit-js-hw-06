const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");

function setIngridients(ingredients) {
  for (let ingredient of ingredients) {
    let itemIngridient = document.createElement("li");
    itemIngridient.classList.add("item");
    itemIngridient.textContent = ingredient;
    list.append(itemIngridient);
  }
}

setIngridients(ingredients);
