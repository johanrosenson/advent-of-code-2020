require('../array');

const fs = require('fs');

let rows = fs.readFileSync('input.txt', 'utf8').split('\n').map((number) => parseInt(number));

rows = rows.sort(function (a, b) {
    if (a < b) {
        return -1;
    }

    if (b < a) {
        return 1;
    }

    return 0;
});

let differences = new Map;

differences.set(1, 1);
differences.set(3, 1);

for (let i = 0, imax = rows.length - 1; i < imax; i++) {
    const diff = rows[i+1] - rows[i];

    differences.set(
        diff,
        differences.get(diff) + 1,
    );
}

let answer = differences.get(1) * differences.get(3);

console.log(`Answer: ${answer}`);
