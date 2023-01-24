const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
  }, 1000);
    
    stopBtn.disabled = false;
    startBtn.disabled = true;
};

function onStopBtnClick() {
  clearInterval(intervalId);
        
    stopBtn.disabled = true;
    startBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};





