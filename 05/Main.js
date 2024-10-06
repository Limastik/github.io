// 1. Визначення типу геометричної фігури за допомогою switch
let shape = "квадрат";

switch (shape) {
  case "коло":
    console.log("Коло має 0 сторін");
    break;
  case "квадрат":
    console.log("Квадрат має 4 сторони");
    break;
  case "трикутник":
    console.log("Трикутник має 3 сторони");
    break;
  default:
    console.log("Невідома фігура");
}

// 2. Підрахунок суми парних чисел
let start = 1;
let end = 20;
let sum = 0;

while (start <= end) {
  if (start % 2 === 0) {
    sum += start;
  }
  start++;
}

console.log("Сума парних чисел:", sum);

// 3. Таблиця множення
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// 4. Зворотний лічильник
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 5. Визначення чи є число парним чи непарним
let num = 7;

if (num % 2 === 0) {
  console.log(`${num} є парним числом`);
} else {
  console.log(`${num} є непарним числом`);
}

// 6. Знаходження першого парного числа
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`Перше парне число: ${i}`);
    break;
  }
}

// 7. Виведення парних чисел
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
