'use strict';

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signoutButton = document.getElementById('signout__btn');

signinForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(signinForm);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php'); 
  
  request.addEventListener('readystatechange', function() {
    if (this.readyState !== this.DONE)  
      return;
          
      switch (this.status) {
        case 0:
          alert('Нет ответа от сервера');
          break;
                
        case 200:
          const answer = JSON.parse(this.responseText);
          if (answer.success === undefined) {
            alert('Ошибка ответа сервера');
            return;
          }
          if (!answer.success) {
            alert('Неверный логин/пароль');
            return;
          }
          if (answer.user_id === undefined) {
            alert('Ошибка ответа сервера');
            return;
          }
          
          localStorage.userId = answer.user_id;
          userId.innerText = localStorage.userId;
          signin.classList.remove('signin_active');
          welcome.classList.add('welcome_active');          
          
          break;
              
        default:
          alert(`Ошибка, код ответа ${this.status} (${this.statusText})`); 
      }

  });
  
  request.send(formData);
  
  for (const input of signinForm.querySelectorAll('input'))
    input.value = '';
  
});

signoutButton.addEventListener('click', () => {
  delete localStorage.userId;
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});

if (localStorage.userId !== undefined) {
  userId.innerText = localStorage.userId;
  welcome.classList.add('welcome_active');  
} else
  signin.classList.add('signin_active');