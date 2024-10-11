
function saveToSession() {
    const input = document.getElementById('userInput').value;
    sessionStorage.setItem('userInput', input);
}

function showSessionData() {
    const data = sessionStorage.getItem('userInput');
    document.getElementById('sessionDataDisplay').innerText = data || 'No data saved.';
}


function savePreferences() {
    const bgColor = document.getElementById('bgColor').value;
    localStorage.setItem('bgColor', bgColor);
    applyPreferences();
}

function applyPreferences() {
    const bgColor = localStorage.getItem('bgColor');
    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
        document.getElementById('bgColor').value = bgColor;
    }
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.push(taskText);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            removeTask(index);
        };
        li.appendChild(deleteButton);
        taskListElement.appendChild(li);
    });
}

function removeTask(index) {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    renderTaskList();
}


window.onload = function() {
    applyPreferences();
    renderTaskList();
};
