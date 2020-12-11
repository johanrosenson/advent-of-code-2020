require('../array');

const fs = require('fs');

const numbers = fs.readFileSync('example.txt', 'utf8').split('\n').map((number) => parseInt(number));

console.log(numbers);
console.log(numbers.addends(2020, 2, 2));

// numbers.forEach(function (num1, index) {
//     numbers.slice(index).forEach(function (num2) {
//         if (num1 + num2 === 2020) {
//             console.log(num1 * num2);
//         }
//     });
// });
