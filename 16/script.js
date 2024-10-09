// Завдання onMouseOver і onMouseOut
const hoverArea = document.querySelector('.hover-area');
hoverArea.addEventListener('mouseover', () => {
    hoverArea.style.backgroundColor = 'lightblue';
});
hoverArea.addEventListener('mouseout', () => {
    hoverArea.style.backgroundColor = 'lightgray';
});

// Завдання onContextMenu
const textBlock = document.getElementById('textBlock');
const contextMenu = document.getElementById('contextMenu');

textBlock.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
});

document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

contextMenu.addEventListener('click', (e) => {
    const action = e.target.getAttribute('data-action');
    if (action === 'center') {
        textBlock.style.textAlign = 'center';
    } else if (action === 'right') {
        textBlock.style.textAlign = 'right';
    } else if (action === 'left') {
        textBlock.style.textAlign = 'left';
    } else if (action === 'hide') {
        textBlock.style.display = 'none';
    }
});

// Завдання з onMouseOver і onMouseOut для зображення
const hoverImage = document.querySelector('.hover-image');
hoverImage.addEventListener('mouseover', () => {
    hoverImage.style.transform = 'scale(1.2)';
    hoverImage.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
});
hoverImage.addEventListener('mouseout', () => {
    hoverImage.style.transform = 'scale(1)';
    hoverImage.style.boxShadow = 'none';
});

// Завдання з keyup для керування об'єктом
const movableObject = document.querySelector('.movable-object');
let position = { top: 50, left: 50 };

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') position.top -= 5;
    if (e.key === 'ArrowDown') position.top += 5;
    if (e.key === 'ArrowLeft') position.left -= 5;
    if (e.key === 'ArrowRight') position.left += 5;
    movableObject.style.top = `${position.top}%`;
    movableObject.style.left = `${position.left}%`;
});

// Комбіноване завдання keydown і keyup для меню
const interactiveMenu = document.getElementById('interactiveMenu');
let selectedItemIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'M') {
        interactiveMenu.style.display = 'block';
    } else if (e.key === 'ArrowDown') {
        selectedItemIndex = (selectedItemIndex + 1) % 3;
        updateMenuSelection();
    } else if (e.key === 'ArrowUp') {
        selectedItemIndex = (selectedItemIndex - 1 + 3) % 3;
        updateMenuSelection();
    } else if (e.key === 'C') {
        interactiveMenu.style.display = 'none';
    }
});

function updateMenuSelection() {
    const items = interactiveMenu.querySelectorAll('li');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === selectedItemIndex);
    });
}

// Додаткове завдання onMouseDown і onMouseUp
const draggableObject = document.querySelector('.draggable-object');
let isDragging = false;

draggableObject.addEventListener('mousedown', () => {
    isDragging = true;
    draggableObject.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggableObject.style.left = `${e.pageX - 25}px`;
        draggableObject.style.top = `${e.pageY - 25}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableObject.style.cursor = 'grab';
});
