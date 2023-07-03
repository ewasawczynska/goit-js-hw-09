import Notiflix from 'notiflix';

const button = document.querySelector('button');
const form = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = {
        position: position,
        delay: delay,
      };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

function submit(event) {
  event.preventDefault();
  const firstDelay = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const amount = Number(form.amount.value);
  for (let index = 0; index < amount; index++) {
    createPromise(index + 1, firstDelay + delayStep * index)
      .then(result => {
        Notiflix.Notify.success(
          `Fulfilled promise ${result.position} in ${result.delay} ms`
        );
      })
      .catch(result => {
        Notiflix.Notify.failure(
          `Rejected promise ${result.position} in ${result.delay} ms`
        );
      });
  }
}

button.addEventListener('click', submit);
