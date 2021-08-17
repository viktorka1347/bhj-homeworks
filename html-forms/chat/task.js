'use strict';

const messages = [
  'Кто тут?',
  'Где ваша совесть?',
  'Добрый день! До свидания!',
  'Мы ничего не будем вам продавать',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
];

const redBadge = document.querySelector('.chat-widget__side');
const chatWindow = document.querySelector('.chat-widget');
const chatMessages = document.getElementById('chat-widget__messages');
const inputMessage = document.getElementById('chat-widget__input');

const initTimer = 30;

const timer = {
  counter: initTimer,
  repeat: () => {
    timer.counter--;
    if (timer.counter <= 0)
      robotReply();
  }
};

const robotReply = () => {
  timer.counter = initTimer;
  const index = Math.floor(Math.random() * messages.length);
  chatMessages.innerHTML += `<div class="message"><div class="message__time">${new Date().toLocaleTimeString().substr(0,5)}</div><div class="message__text">${messages[index]}</div></div>`;
  chatMessages.lastElementChild.scrollIntoView(false);
}

redBadge.addEventListener('click', () => {
  chatWindow.classList.add('chat-widget_active');  
  setInterval(timer.repeat, 1000);
});

inputMessage.addEventListener('keydown', function(e) {
  if (e.code !== 'Enter')
    return;
  if (this.value.length === 0)
    return;
  chatMessages.innerHTML += `<div class="message message_client"><div class="message__time">${new Date().toLocaleTimeString().substr(0,5)}</div><div class="message__text">${this.value}</div></div>`;  
  this.value = '';
  robotReply();
})