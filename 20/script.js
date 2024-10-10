// Функція для виведення повідомлення з затримкою
function delayedMessage(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time);
}

// Виклик функції: виведе повідомлення через 2 секунди (2000 мс)
delayedMessage("Hello after 2 seconds!", 2000);

// Лічильник зупиняється після досягнення 10
let counter = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        counter++;
        console.log(counter);

        if (counter >= 10) {
            clearInterval(timer);
            console.log("Timer stopped");
        }
    }, 1000); // Оновлюється кожну секунду
}

document.getElementById('startTimerButton').addEventListener('click', startTimer);

// Зміна кольору фону на випадковий колір
const colors = [
    'var(--color1)',
    'var(--color2)',
    'var(--color3)',
    'var(--color4)',
    'var(--color5)'
];

function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
