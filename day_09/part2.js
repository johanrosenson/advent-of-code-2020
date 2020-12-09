const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n').map((number) => parseInt(number));;

const target = 1038347917;

let answer = 0;

for (let i = 0, imax = rows.length - 1; i < imax; i++) {
    let test = [
        rows[i],
    ];
    let n = i;

    while (test.reduce((a, b) => a + b, 0) < target) {
        test.push(rows[++n]);

        if (test.reduce((a, b) => a + b, 0) === target) {
            answer = test.sort()[0] + test.sort()[test.length - 1];
            break;
        }
    }
}

console.log(`Answer: ${answer}`);
