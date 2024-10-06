// push

// Завдання 1
let arr1 = [];
arr1.push(1, 2, 3, "текст");
console.log(arr1);

// Завдання 2
function addElement(arr, element) {
  arr.push(element);
}
addElement(arr1, 4);
console.log(arr1);

// pop

// Завдання 1
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2);

// Завдання 2
function removeLastElement(arr) {
  arr.pop();
}
removeLastElement(arr2);
console.log(arr2);

// unshift

// Завдання 1
let arr3 = [3, 4, 5];
arr3.unshift(1, 2);
console.log(arr3);

// Завдання 2
function addElementToStart(arr, element) {
  arr.unshift(element);
}
addElementToStart(arr3, 0);
console.log(arr3);

// shift

// Завдання 1
let arr4 = [1, 2, 3, 4];
arr4.shift();
console.log(arr4);

// Завдання 2
function removeFirstElement(arr) {
  arr.shift();
}
removeFirstElement(arr4);
console.log(arr4);

// fill

// Завдання 1
let arr5 = new Array(5).fill(0);
console.log(arr5);

// Завдання 2
function fillArray(arr, value, start, end) {
  arr.fill(value, start, end);
}
fillArray(arr5, 7, 1, 3);
console.log(arr5);

// splice

// Завдання 1
let arr6 = [1, 2, 3, 4, 5, 6];
arr6.splice(2, 2);
console.log(arr6);

// Завдання 2
function removeElements(arr, index, count) {
  arr.splice(index, count);
}
removeElements(arr6, 1, 1);
console.log(arr6);

// reverse

// Завдання 1
let arr7 = [1, 2, 3, 4];
arr7.reverse();
console.log(arr7);

// Завдання 2
function reverseArray(arr) {
  arr.reverse();
}
reverseArray(arr7);
console.log(arr7);

// concat

// Завдання 1
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let newArray = arr8.concat(arr9);
console.log(newArray);

// Завдання 2
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
let resultArray = concatenateArrays(arr8, arr9);
console.log(resultArray);

// includes

// Завдання 1
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.includes(3));

// Завдання 2
function checkIfIncludes(arr, element) {
  return arr.includes(element);
}
console.log(checkIfIncludes(arr10, 6));

// filter

// Завдання 1
let arr11 = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr11.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Завдання 2
function filterArray(arr, condition) {
  return arr.filter(condition);
}
let filteredArray = filterArray(arr11, num => num > 3);
console.log(filteredArray);

// map

// Завдання 1
let arr12 = [1, 2, 3, 4];
let squaredNumbers = arr12.map(num => num * num);
console.log(squaredNumbers);

// Завдання 2
function mapArray(arr, transformer) {
  return arr.map(transformer);
}
let transformedArray = mapArray(arr12, num => `Число: ${num}`);
console.log(transformedArray);
