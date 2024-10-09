// 1. Вибір елементів
const firstLevelItems = document.querySelectorAll('#tree > li');
console.log('Кількість елементів 1 рівня:', firstLevelItems.length);

const secondLevelItems = document.querySelectorAll('#tree > li > ul > li');
console.log('Кількість елементів 2 рівня:', secondLevelItems.length);

// 2. Заповнення таблиці
const booksArray = [
    { title: 'Пригоди Аліси в Країні Див', year: 1865, rating: 4.5 },
    { title: '1984', year: 1949, rating: 4.8 },
    { title: 'Гаррі Поттер і філософський камінь', year: 1997, rating: 4.7 }
];

const booksTable = document.getElementById('books-table');

booksArray.forEach(book => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.year}</td><td>${book.rating}</td>`;
    booksTable.appendChild(row);
});

// 3. Додавання елементів до контейнера
const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];

function createElement(obj) {
    const element = document.createElement(obj.tag);
    element.textContent = obj.text;
    return element;
}

const container = document.getElementById('container');

elementsArray.forEach(elementObj => {
    const newElement = createElement(elementObj);
    container.appendChild(newElement);
});

// 4. Створення елементів залежно від usePrepend
const prependArray = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];

prependArray.forEach(item => {
    const newElement = document.createElement('p');
    newElement.textContent = item.text;
    
    if (item.usePrepend) {
        container.prepend(newElement);
    } else {
        container.appendChild(newElement);
    }
});
