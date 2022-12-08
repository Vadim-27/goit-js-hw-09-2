import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  firstDelayEl: document.querySelector('input[name="delay"]'),
  stepDelayEl: document.querySelector('input[name="step"]'),
  amountDelayEl: document.querySelector('input[name="amount"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
        // Fulfill
      } else {
        reject({ position, delay })
        // Reject
      }
    }, delay);
  });
  
}

function onFormSubmit(e) {
  e.preventDefault();
  let firstDelayEl = Number(refs.firstDelayEl.value);
  let stepDelayEl = Number(refs.stepDelayEl.value);
  let amountDelayEl = Number(refs.amountDelayEl.value);

  for (let i = 0; i < amountDelayEl; i += 1) {
    createPromise(i, firstDelayEl += stepDelayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

