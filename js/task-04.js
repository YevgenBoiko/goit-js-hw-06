let counterValue = 0;

const decButton = document.querySelector("button[data-action='decrement']");
const incButton = document.querySelector("button[data-action='increment']");
const valueData = document.querySelector("#value");

const incValue = () => {
  counterValue += 1;
  return (valueData.textContent = counterValue);
};

const decValue = () => {
  counterValue -= 1;
  return (valueData.textContent = counterValue);
};

incButton.addEventListener("click", incValue);
decButton.addEventListener("click", decValue);
