const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ingredientArr = ingredients.map((ingredient) => {
  const itemIngridient = document.createElement("li");
  itemIngridient.textContent = ingredient;
  return itemIngridient;
});
list.append(...ingredientArr);
