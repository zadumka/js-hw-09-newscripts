/* const throttle = require('lodash.throttle'); */

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

const localStoregaData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(localStoregaData);

if (parsedData !== null) {
  if (parsedData.email !== '') inputEl.value = parsedData.email;
  if (parsedData.message !== '') messageEl.value = parsedData.messege;
}
formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onPress);

function onInput(evt) {
  const emailValue = inputEl.value.trim();
  const messegeValue = messageEl.value.trim();
  const inputArr = {
    email: `${emailValue}`,
    messege: `${messegeValue}`,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputArr));
}

function onPress(evt) {
  evt.preventDefault();
  if (inputEl.value !== '' && messageEl.value !== '') {
    const getArr = localStorage.getItem('feedback-form-state');
    const parsedArr = JSON.parse(getArr);
    console.log(parsedArr);

    localStorage.removeItem('feedback-form-state');
    formEl.reset();
  } else {
    const message = 'Будь ласка, заповніть всі поля форми.';
    alert(message);
  }
}
