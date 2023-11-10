const textColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.body;

changeColorBtn.addEventListener("click", () => {
  textColor.textContent = body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});
