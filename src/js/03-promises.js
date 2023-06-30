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
}

button.addEventListener('click', submit);
