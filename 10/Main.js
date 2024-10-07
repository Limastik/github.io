// Гра "Камінь, ножниці, папір"
function rockPaperScissors() {
  const options = ["камінь", "ножниці", "папір"];
  const userChoice = prompt("Виберіть: камінь, ножниці, папір").toLowerCase();
  
  if (!options.includes(userChoice)) {
      alert("Неправильний вибір. Будь ласка, спробуйте ще раз.");
      return;
  }

  const computerChoice = options[Math.floor(Math.random() * options.length)];
  let result;

  if (userChoice === computerChoice) {
      result = "Нічия!";
  } else if (
      (userChoice === "камінь" && computerChoice === "ножниці") ||
      (userChoice === "ножниці" && computerChoice === "папір") ||
      (userChoice === "папір" && computerChoice === "камінь")
  ) {
      result = "Ви виграли!";
  } else {
      result = "Ви програли!";
  }

  alert(`Ви вибрали: ${userChoice}\nКомп'ютер вибрав: ${computerChoice}\nРезультат: ${result}`);
}

rockPaperScissors();

// Функція для Math.min
function min(a, b) {
  return Math.min(a, b);
}

// Функція для Math.max
function max(a, b) {
  return Math.max(a, b);
}

// Функція для Math.pow
function power(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(power(2, 3)); // 8

// Функція для Math.floor
function floorRandom(randomNumber) {
  return Math.floor(randomNumber);
}

// Функція для Math.ceil
function ceilRandom(randomNumber) {
  return Math.ceil(randomNumber);
}

// Використання функцій Math.floor та Math.ceil
console.log(floorRandom(3.7)); // 3
console.log(ceilRandom(3.2)); // 4

// Функція для отримання року народження
function getBirthYear(age) {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

console.log(getBirthYear(20)); // 2004, якщо поточний рік 2024

// Отримання поточної дати та часу
const currentDate = new Date();
console.log(currentDate.toLocaleString());

// Функція для розбиття рядка на масив слів та виведення у верхньому регістрі
function splitAndUpperCase(sentence) {
  const wordsArray = sentence.split(" ");
  const upperCaseArray = wordsArray.map(word => word.toUpperCase());
  console.log(upperCaseArray);
}

splitAndUpperCase("Це приклад рядка зі словами."); 
