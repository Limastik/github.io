const button = document.getElementById('change-text-btn');
const textElement = document.getElementById('text');

button.addEventListener('click', () => {
  if (textElement.innerText === 'Тут буде новий текст.') {
    textElement.innerText = 'Текст змінено!';
  } else {
    textElement.innerText = 'Тут буде новий текст.';
  }
});
