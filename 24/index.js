import { getUserData, getFilmData, getPlanetData } from './api.js';
import { add, subtract, multiply, divide } from './mathOperations.js';
import { toUpperCase, reverseString } from './stringUtilities.js';

getUserData(1);
getFilmData(1);
getPlanetData(1);

console.log('Addition:', add(5, 3));
console.log('Subtraction:', subtract(5, 3));
console.log('Multiplication:', multiply(5, 3));
console.log('Division:', divide(5, 3));

console.log('Uppercase:', toUpperCase('hello'));
console.log('Reversed:', reverseString('hello'));
