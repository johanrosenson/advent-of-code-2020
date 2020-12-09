const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n').map((number) => parseInt(number));;

const threshold = 25;

const answer = rows.find(function (number, index) {
    if ((index + 1) <= threshold) {
        return false;
    }

    const numbers = rows.slice(index - threshold, index);

    let found = false;

    numbers.forEach(function (num1, index) {
        numbers.slice(index).forEach(function (num2) {
            if (num1 + num2 === number) {
                found = true;
            }
        });
    });

    if (found) {
        return false;
    }

    return true;
});

console.log(`Answer: ${answer}`);
