const categoriesEl = document.querySelector("#categories");
const categoriesItemsEl = categoriesEl.children.length;
console.log("Number of categories: ", categoriesItemsEl);

const listItemsEl = document.querySelectorAll(".item");
listItemsEl.forEach((a) => {
  console.log("Category: ", a.firstElementChild.textContent);
  console.log("Elements: ", a.lastElementChild.children.length);
});
