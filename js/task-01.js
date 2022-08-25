// in console:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

let parent = document.querySelector("#categories");
let items = document.querySelectorAll(".item");

console.log("Number of categories:", items.length);

for (let i = 0; i < items.length; i++) {
  console.log("Category:", items[i].firstElementChild.textContent);
  console.log(
    "Elements:",
    items[i].lastElementChild.querySelectorAll("li").length
  );
}
