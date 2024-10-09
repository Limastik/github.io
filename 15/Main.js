// 1. Зміна кольору тексту
const colorButton = document.getElementById('colorButton');
const colorText = document.getElementById('colorText');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorButton.onclick = function() {
    colorText.style.color = getRandomColor();
};

// 2. Збільшення розміру
const resizeElement = document.getElementById('resizeElement');

resizeElement.ondblclick = function() {
    resizeElement.style.width = (resizeElement.offsetWidth * 2) + 'px';
    resizeElement.style.height = (resizeElement.offsetHeight * 2) + 'px';
};

// 3. Лічильник
let counter = 0;
const counterButton = document.getElementById('counterButton');
const counterText = document.getElementById('counterText');

counterButton.addEventListener('click', function() {
    counter++;
    counterText.textContent = `Лічильник: ${counter}`;
    
    if (counter > 10) {
        counterButton.removeEventListener('click', arguments.callee); // Вимикаємо кнопку
    }
});

// 4. Видалення елементів
const removeContainer = document.getElementById('removeContainer');

for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.textContent = `Елемент ${i}`;
    div.style.margin = '5px';
    div.style.padding = '10px';
    div.style.backgroundColor = 'lightgray';
    div.style.cursor = 'pointer';
    
    div.onclick = function() {
        removeContainer.removeChild(div);
    };
    
    removeContainer.appendChild(div);
}

// 5. Обробка подій за допомогою event.target
const blockContainer = document.querySelector('.blockContainer');

blockContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`Ви клікнули на ${event.target.classList[1]}`);
    }
});
