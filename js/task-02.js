const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createItemEl = function (ingredient) {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");
  return itemEl;
};

const products = ingredients.map((product) => createItemEl(product));

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...products);
