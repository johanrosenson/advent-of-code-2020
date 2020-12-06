const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n\n');

const answer = rows.reduce(function (carry, row) {
    const questions = row.replace(/\s+/g, '').split('').filter(function (value, index, self) {
        return self.indexOf(value) === index;
    }).length;

    return carry + questions;
}, 0);

console.log(`Answer: ${answer}`);
