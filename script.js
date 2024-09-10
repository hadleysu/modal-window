'use strict';

const buttonEl = document.querySelector('.show-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');

// Add show modal button event listener
buttonEl.addEventListener('click', function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
});
