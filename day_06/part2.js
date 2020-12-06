const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n\n');

const answer = rows.reduce(function (carry, row) {
    const people = row.split('\n').length;

    const questions = row.replace(/\s+/g, '').split('');

    const unique_questions = questions.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    const complete = unique_questions.filter(function (value) {
        const occurences = questions.sort().join('').replace(new RegExp(`[^${value}]`, 'g'), '');

        return people === occurences.length;
    });

    return carry + complete.length;
}, 0);

console.log(`Answer: ${answer}`);
