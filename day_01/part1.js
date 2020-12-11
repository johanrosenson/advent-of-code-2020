const fs = require('fs');

const numbers = fs.readFileSync('input.txt', 'utf8').split('\n').map((number) => parseInt(number));

numbers.forEach(function (num1, index) {
    numbers.slice(index).forEach(function (num2) {
        if (num1 + num2 === 2020) {
            console.log([num1, num2]);
            console.log(num1 * num2);
        }
    });
});
