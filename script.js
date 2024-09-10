'use strict';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const buttonEls = document.querySelectorAll('.show-modal');
const closeButtonEl = document.querySelector('.close-modal');

// Refactor: use querySelectorAll to add event listeners to multiple modal buttons
for (let i = 0; i < buttonEls.length; i++) {
  // Add show modal button event listener
  buttonEls[i].addEventListener('click', function () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
  });
}

// Add close modal button event listener
closeButtonEl.addEventListener('click', function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
});

// Add overlay event listener
overlayEl.addEventListener('click', function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
});

// Add esc keyboard event listener
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
  }
});
