'use strict';

const fileForm = document.getElementById('form');
const selectFile = fileForm.querySelector('input');
const progressBar = document.getElementById('progress');

fileForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(fileForm);
  
  const request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
  
  request.upload.addEventListener('progress', e => progressBar.value = (e.loaded / e.total).toFixed(2));
  
  request.send(formData);
});

selectFile.addEventListener('change', () => progressBar.value = '0');