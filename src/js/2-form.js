'use strict';

const feedbackForm = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const input = feedbackForm.elements.email;
const textarea = feedbackForm.elements.message;

const savedState = localStorage.getItem(localStorageKey);

if (savedState ?? '') {
  const parsedState = JSON.parse(savedState);
  input.value = parsedState.email;
  textarea.value = parsedState.message;
}

feedbackForm.addEventListener('input', () => {
  const feedback = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(feedback));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value === '' || textarea.value === '') {
    alert('You need to write a message!');
    return;
  }

  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
});
