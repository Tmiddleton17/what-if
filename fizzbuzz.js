const prompt = require('prompt-sync')();

const number1 = prompt('Enter a number ');

if (number1 / 15 === 0) {
    console.log('fizzbuzz');
}

else if (number1 / 3 === 0) {
    console.log('fizz');
}

else if (number1 % 5 === 0) {
    console.log('fizz');
}