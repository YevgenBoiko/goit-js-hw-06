const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColorButton = document.querySelector(".change-color");
const text = document.querySelector(".color");

const onChangeBgc = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};

changeColorButton.addEventListener("click", onChangeBgc);
