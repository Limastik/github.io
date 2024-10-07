// Spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log("Об'єднаний масив:", combinedArray); // Виведе: [1, 2, 3, 4, 5, 6]

// Rest
function combineStringAndArray(first, ...rest) {
    console.log(`Рядок: ${first}`);
    console.log(`Масив:`, rest);
}

combineStringAndArray("Привіт", 1, 2, 3, 4); 
// Виведе: 
// Рядок: Привіт
// Масив: [1, 2, 3, 4]

function calculateAverage(...numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    console.log(`Середнє значення: ${average}`);
}

calculateAverage(10, 20, 30, 40); // Виведе: Середнє значення: 25

// TypeOf
function checkType(value) {
    console.log(`Тип: ${typeof value}`);
}

checkType(123);        // Виведе: Тип: number
checkType("Hello");    // Виведе: Тип: string
checkType(true);       // Виведе: Тип: boolean
checkType({});         // Виведе: Тип: object

// Перевірка типу змінної
const variable = "Тест";
if (typeof variable === "number") {
    console.log("Це число");
} else if (typeof variable === "string") {
    console.log("Це рядок");
} else {
    console.log("Це інший тип");
}
