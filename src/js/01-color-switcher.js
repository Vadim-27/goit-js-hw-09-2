import '../css/common.css';

const refs = {
    startBtnEl: document.querySelector('button[data-start]'),
    stopBtnEl: document.querySelector('button[data-stop]'),
};

const CHANGEBACKGRCOLOR_DELEY = 1000;
let timeId = null;


refs.startBtnEl.addEventListener('click', startCengeColor);
refs.stopBtnEl.addEventListener('click', stopCengeColor);

function startCengeColor() {
    timeId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, CHANGEBACKGRCOLOR_DELEY);
    refs.startBtnEl.setAttribute('disabled', true);
    refs.stopBtnEl.removeAttribute('disabled');
};

function stopCengeColor() {
    clearInterval(timeId);
    refs.stopBtnEl.setAttribute('disabled', true);
    refs.startBtnEl.removeAttribute('disabled');
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}