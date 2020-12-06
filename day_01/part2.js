const fs = require('fs');

const numbers = fs.readFileSync('input.txt', 'utf8').split('\n').map((number) => parseInt(number));

numbers.forEach(function (num1, index1) {
    numbers.slice(index1).forEach(function (num2, index2) {
        numbers.slice(index1 + index2).forEach(function (num3, index3) {
            if (num1 + num2 + num3 === 2020) {
                console.log(num1 * num2 * num3);
            }
        });
    });
});
