const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

const evaluate = function (rows) {
    let visited = new Map;
    let accumulator = 0;
    let nextPos = 0;

    while (true) {
        [instruction, value] = rows[nextPos].split(' ');

        if (instruction === 'acc') {
            accumulator += parseInt(value);

            nextPos = nextPos + 1;
        } else if (instruction === 'nop') {
            nextPos = nextPos + 1;
        } else if (instruction === 'jmp') {
            nextPos = nextPos + parseInt(value);
        }

        if (typeof rows[nextPos] === 'undefined') {
            break; // terminates
        }

        if (visited.has(nextPos)) {
            return false; // infinite loop
        }

        visited.set(nextPos, true);
    }

    return accumulator;
}

let answer = 0;

for (let i = 0, imax = rows.length; i < imax; i++) {
    [instruction, value] = rows[i].split(' ');

    if (instruction === 'acc') {
        continue;
    }

    let newRows = [...rows];

    newRows[i] = (instruction === 'jmp' ? 'nop' : 'jmp') + ' ' + value;

    const accumulator = evaluate(newRows);

    if (accumulator !== false) {
        answer = accumulator;
        break;
    }
}

console.log(`Answer: ${answer}`);
