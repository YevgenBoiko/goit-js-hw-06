const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColorButton = document.querySelector(".change-color");
const text = document.querySelector(".color");

const onChangeBgc = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
};

changeColorButton.addEventListener("click", onChangeBgc);
