require('../array');

const fs = require('fs');

const input = [
    // 'example.txt',
    'input.txt',
];

const rows = fs.readFileSync(input[0], 'utf8').rows();

const turn = function (currentHeading, direction, degrees) {
    const headings = [
        'E', 'S', 'W', 'N',
    ];

    if (direction === 'L') {
        headings.reverse();
    }

    return headings[(headings.indexOf(currentHeading) + degrees / 90) % headings.length];
};

let heading = 'E';

let x = 0; // west / east
let y = 0; // north / south

rows.forEach(function (row) {
    [action, value] = [row.substr(0, 1), row.substr(1)].map(function (value) {
        return value.match(/^\d+$/)
            ? parseInt(value)
            : value;
    });

    if (['R', 'L'].includes(action)) {
        // console.log(`Turn ${value} degrees ${action} (x: ${x} y: ${y})`);

        heading = turn(heading, action, value);

        // console.log(`New heading ${heading}`);

        return;
    }

    const direction = action === 'F'
        ? heading
        : action;

    // console.log(`Move ${direction} ${value} (${heading}) (x: ${x} y: ${y})`);

    if (['W', 'E'].includes(direction)) {
        x += value * (direction === 'W' ? -1 : 1);
    } else {
        y += value * (direction === 'N' ? -1 : 1);
    }

    // console.log(`Moved ${direction} ${value} (${heading}) (x: ${x} y: ${y})`);
});

// console.log({
//     heading: heading,
//     x: x,
//     y: y,
// });

const answer = Math.abs(x) + Math.abs(y);

console.log(`Answer: ${answer}`);
