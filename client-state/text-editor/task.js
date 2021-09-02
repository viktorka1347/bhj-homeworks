'use strict';

const editor = document.getElementById('editor');
const button = document.getElementById('clear');

const key = 'editorText';

button.addEventListener('click', () => editor.value = '');

window.addEventListener('unload', () => localStorage[key] = editor.value);

editor.value = localStorage[key];