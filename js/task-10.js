function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const amountInput = document.querySelector("#controls input");
const boxesEl = document.querySelector("#boxes");

let onInputAmount = 0;
amountInput.addEventListener(
  "blur",
  () => (onInputAmount = Number(amountInput.value))
);

const createBoxes = (amount) => {
  amount = onInputAmount;
  let text = "";
  let dimention = 30;
  for (let i = 0; i < amount; i += 1) {
    text += `<div style="background-color:${getRandomHexColor()}; width:${dimention}px; height:${dimention}px;"></div>`;
    dimention += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", text);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  amountInput.value = "";
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
