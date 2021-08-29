'use strict';

const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const storageKey = 'tasks';

const closeTask = (e,task) => {
  e.preventDefault(); 
  console.log(task);
  task.remove();
  localStorage.setItem(storageKey, tasksList.innerHTML);    
}

taskAdd.addEventListener('click', e => {
  e.preventDefault();
  if (!taskInput.value)
    return;
  
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `<div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a>`;
    
  task.querySelector('.task__remove').addEventListener('click', e => closeTask(e,task));
  
  tasksList.appendChild(task);
  localStorage.setItem(storageKey, tasksList.innerHTML);  
  
})

tasksList.innerHTML = localStorage.getItem(storageKey);
for (const task of tasksList.getElementsByClassName('task'))
  task.querySelector('.task__remove').addEventListener('click', e => closeTask(e,task));