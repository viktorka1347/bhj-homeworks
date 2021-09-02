'use strict';

const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const statistics = document.getElementById('stat__items'); 

const request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

request.addEventListener('readystatechange', function() {
  if (this.readyState !== this.DONE)  
    return;

  switch (this.status) {
    case 0:
      alert('Нет ответа от сервера');
      break;
      
    case 200:
      const poll = JSON.parse(this.responseText);
      title.innerText = poll.data.title;

      let buttonsHTML = '';      
      for (let i = 0; i < poll.data.answers.length; i++)
        buttonsHTML += `<button class="poll__answer" value="${i}">${poll.data.answers[i]}</button>`;
      answers.innerHTML = buttonsHTML;
      
      for (const button of answers.querySelectorAll('.poll__answer'))
        button.addEventListener('click', function() {
          const request2 = new XMLHttpRequest();
          
          request2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php'); 
          request2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

          request2.addEventListener('readystatechange', function() {
            if (this.readyState !== this.DONE)  
              return;
            
            switch (this.status) {
              case 0:
                alert('Нет ответа от сервера');
                break;
                
              case 200:
                const statData = JSON.parse(this.responseText).stat;
                answers.classList.remove('poll__answers_active');
                if (statData.length === 0)
                  return;
                
                const sum = statData.reduce((sum, arg) => sum += arg.votes, 0);
                
                let statHTML = '';
                for (const item of statData)
                  statHTML += `<div class="stat__item">${item.answer}:&nbsp;<span class="stat__value">${((item.votes / sum) * 100).toFixed(2)}%</span></div>`;
                statistics.innerHTML = statHTML;
                
                break;
              
              default:
                alert(`Ошибка, код ответа ${this.status} (${this.statusText})`); 
            }
          });
           
          request2.send(`vote=${poll.id}&answer=${button.value}`);
          
          alert('Спасибо, ваш голос засчитан!');
          
        });
      
      break;
      
    default:
      alert(`Ошибка, код ответа ${this.status} (${this.statusText})`);      
  }

});

request.send();