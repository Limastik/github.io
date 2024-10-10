// Конвертер валют
document.getElementById('convertButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const result = amount * rate;
    document.getElementById('result').innerText = result.toFixed(2);
});

// Додавання задач
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue === '') {
        alert('Введіть назву задачі!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskValue} <button onclick="removeTask(this)">Видалити</button>`;
    document.getElementById('taskList').appendChild(li);

    taskInput.value = ''; // Очистити поле після додавання
});

// Функція для видалення задач
function removeTask(button) {
    const li = button.parentElement;
    document.getElementById('taskList').removeChild(li);
}
