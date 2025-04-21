function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBack = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


colorBack.addEventListener('click', newColor)


function newColor(e) {
  const colorBack = getRandomHexColor();
  document.body.style.backgroundColor = colorBack;
  spanColor.textContent = colorBack;
}