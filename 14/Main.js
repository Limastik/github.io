// 2. Створення елементу header та встановлення стилів
const header = document.createElement('header');
header.style.padding = '50px';
header.style.backgroundColor = 'yellow';
header.style.textAlign = 'center';
document.body.appendChild(header);

// 3. Створення меню з посиланнями на основі menuData
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    { name: 'Контакти', url: '/contacts' }
];

menuData.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.url;
    link.style.margin = '0 15px'; // Додаємо відступ між посиланнями
    link.target = '_blank'; // 4. Встановлення атрибута target
    header.appendChild(link);
});

// 5. Створення блоку з 50 div елементами
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap'; // Додаємо перенесення на новий рядок
document.body.appendChild(container);

for (let i = 0; i < 50; i++) {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = getRandomColor(); // Унікальний колір для кожного div
    div.style.margin = '5px'; // Додаємо відступ між елементами
    div.classList.add('circle-element'); // 6. Додаємо клас
    container.appendChild(div);
}

// Функція для генерування випадкового кольору
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
