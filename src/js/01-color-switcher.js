import '../css/common.css';

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
stopBtnRef.disabled = true;
let intervalID = null;

const ColorGenerator = {
  DELAY: 1000,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgColor();
    }, this.DELAY);
    stopBtnRef.disabled = false;
  },

  start() {
    startBtnRef.addEventListener('click', () => {
      this.interval();
      startBtnRef.disabled = true;
      stopBtnRef.disabled = false;
    });
    stopBtnRef.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(intervalID);
    stopBtnRef.disabled = true;
    startBtnRef.disabled = false;
  },
};

function changeBgColor() {
  bodyRef.style.backgroundColor = `${ColorGenerator.getRandomHexColor()}`;
}

ColorGenerator.start();