const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");

const ingredientArr = ingredients.map((ingredient) => {
  let itemIngridient = document.createElement("li");
  itemIngridient.textContent = ingredient;
  return itemIngridient;
});
list.append(...ingredientArr);
