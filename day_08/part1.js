const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

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

    if (visited.has(nextPos)) {
        break;
    }

    visited.set(nextPos, true);
}

console.log(`Answer: ${accumulator}`);
