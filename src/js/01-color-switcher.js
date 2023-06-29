const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

const startClick = () => {
  timerId = setInterval(changeBackgroundColor, 1000);
  buttonStart.setAttribute(`disabled`, '');
  buttonStop.removeAttribute(`disabled`);
};

const stopClick = () => {
  clearInterval(timerId);
  buttonStop.setAttribute(`disabled`, '');
  buttonStart.removeAttribute(`disabled`);
};

buttonStart.addEventListener('click', startClick);
buttonStop.addEventListener('click', stopClick);
