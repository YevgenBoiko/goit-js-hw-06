const inputEl = document.querySelector("#validation-input");
const lengthData = Number(inputEl.getAttribute("data-length"));

const onInputBlur = (event) => {
  if (event.currentTarget.value.length === lengthData) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
