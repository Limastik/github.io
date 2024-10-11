function processNumber(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 5);
    })
    .then(result => {
        console.log(`After addition: ${result}`);
        return result * 2;
    })
    .then(result => {
        console.log(`After multiplication: ${result}`);
        return result - 10;
    })
    .then(result => {
        console.log(`Final result: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
}

processNumber(10);

function convertToUpperCase(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str !== 'string') {
                reject('Input must be a string');
            } else {
                resolve(str.toUpperCase());
            }
        }, 2000);
    });
}

convertToUpperCase('hello')
    .then(result => {
        console.log(`Converted string: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 > num2) {
            resolve(`${num1} is greater than ${num2}`);
        } else if (num1 < num2) {
            resolve(`${num2} is greater than ${num1}`);
        } else {
            reject('Числа рівні');
        }
    });
}

compareNumbers(5, 10)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
