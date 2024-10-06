function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : 'Ділення на нуль!';
}

function calculator(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Невідомий оператор!';
  }
}

console.log(calculator('+', 10, 5));
console.log(calculator('*', 10, 5));

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

function wellcomUser(users, callback) {
  for (let user of users) {
    callback(user);
  }
}

const users = ['Андрій', 'Марія', 'Олександр'];
wellcomUser(users, hiUser);

const wellcomUserArrow = (users, callback) => {
  users.forEach(user => callback(user));
};

wellcomUserArrow(users, hiUser);

function greetUser(name = 'Користувач') {
  console.log(`Привіт, ${name}!`);
}

greetUser();
greetUser('Іван');

function processString(string, callback) {
  callback(string);
}

processString('Привіт, Світ!', console.log);

function multiplyValues(a, b, c) {
  return a * b * c;
}

console.log(multiplyValues(2, 3, 4));
