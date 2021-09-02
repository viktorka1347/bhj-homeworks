'use strict';

const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('.modal__close');

const getCookie = name => {
  const value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2)
    return parts.pop().split(';').shift();
}

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('modal_active');
  document.cookie = 'modal=close; Max-Age=31536000';
});

if (getCookie('modal') !== 'close')
  modalWindow.classList.add('modal_active');