require('../array');

const fs = require('fs');

const input = [
    // 'example.txt',
    'input.txt',
];

const rows = fs.readFileSync(input[0], 'utf8').rows();

const getAdjacents = function (input, x, y) {
    const adjacents = [
        (input[x-1] || '').charAt(y-1) || null, // top left
        (input[x-1] || '').charAt(y) || null, // top
        (input[x-1] || '').charAt(y+1) || null, // top right
        (input[x] || '').charAt(y-1) || null, // left
        (input[x] || '').charAt(y+1) || null, // right
        (input[x+1] || '').charAt(y-1) || null, // bottom left
        (input[x+1] || '').charAt(y) || null, // bottom
        (input[x+1] || '').charAt(y+1) || null, // bottom right
    ];

    return adjacents;
};

const process = function (input) {
    const output = [...input];

    for (let x = 0, xmax = input.length; x < xmax; x++) {
        for (let y = 0, ymax = input[x].length; y < ymax; y++) {
            const currentState = input[x].charAt(y);

            const adjacents = getAdjacents(input, x, y);

            const occupiedSeats = adjacents.filter((state) => state === '#');

            const newState = currentState === 'L'
                ? (occupiedSeats.length === 0 ? '#' : currentState)
                : (occupiedSeats.length >= 4 ? 'L' : currentState);

            if (currentState === '.' || currentState === newState) {
                continue; // floor does not change state
            }

            output[x] = output[x].substr(0, y) + newState + output[x].substr(y+1);
        }
    }

    return output;
};

const findEquilibrium = function (input) {
    let rounds = 0;
    let changed = false;
    let output = '';

    do {
        rounds++;

        output = process(input);

        changed = output.filter((row, x) => row !== input[x]).length > 0;

        input = [...output];
    } while (changed === true);

    return {
        rounds: rounds,
        output: output,
    };
};

const countOccupied = function (input) {
    return input.reduce(function (carry, row) {
        return carry + row.replace(/[^#]/g, '').length;
    }, 0);
};

let result = findEquilibrium(rows);

let answer = countOccupied(result.output);

console.log(`Answer: ${answer}`);
