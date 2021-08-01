const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');
const modal_close = document.getElementsByClassName('modal__close');
const show_success = document.getElementsByClassName('show-success');
modal_main.className = 'modal modal_active';
for (let i = 0; i < modal_close.length; i++)
  modal_close[i].onclick = () => {
    modal_close[i].closest('.modal').className = 'modal';
    if (modal_close[i] === show_success[0])
      modal_success.className = 'modal modal_active';
  }