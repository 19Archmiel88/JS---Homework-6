document.body.style.backgroundColor = "#abbbc4";

const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.alignItems = "center";
divBoxesEl.style.marginTop = "30px";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

createBtnEl.addEventListener("click", () => {
  const inputValue = Number(inputNumberEl.value.trim());
  if (
    inputValue > Number(inputNumberEl.max) ||
    inputValue < Number(inputNumberEl.min)
  ) {
    alert("Please enter a number from 1 to 100");
  } else {
    createBoxes(inputValue);
  }
  inputNumberEl.value = "";
});

destroyBtnEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const color = getRandomColor();
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesEl.insertAdjacentHTML("beforeend", boxesArr.join(""));
}
