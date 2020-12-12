require('../array');

const fs = require('fs');

const input = [
    // 'example.txt',
    'input.txt',
];

const rows = fs.readFileSync(input[0], 'utf8').rows();

const rotate = function (input, direction, degrees) {
    let steps = degrees / 90;

    const state = [
        input.y < 0 ? Math.abs(input.y) : null, // north (0)
        input.x > 0 ? Math.abs(input.x) : null, // east (1)
        input.y >= 0 ? Math.abs(input.y) : null, // south (2)
        input.x <= 0 ? Math.abs(input.x) : null, // west (3)
    ];

    while (steps-- > 0) {
        if (direction === 'R') {
            state.unshift(state.pop());
        } else {
            state.push(state.shift());
        }
    }

    return {
        x: state[1] !== null
            ? state[1]
            : state[3] * -1,
        y: state[2] !== null
            ? state[2]
            : state[0] * -1,
    };
};

const waypoint = {
    x: 10, // west / east
    y: -1, // north / south
}

const ship = {
    x: 0, // west / east
    y: 0, // north / south
}

rows.forEach(function (row) {
    [action, value] = [row.substr(0, 1), row.substr(1)].map(function (value) {
        return value.match(/^\d+$/)
            ? parseInt(value)
            : value;
    });

    if (['R', 'L'].includes(action)) {
        const rotated = rotate(waypoint, action, value);

        waypoint.x = rotated.x;
        waypoint.y = rotated.y;

        return;
    }

    if (action === 'F') {
        ship.x += waypoint.x * value;
        ship.y += waypoint.y * value;

        return;
    }

    if (['W', 'E'].includes(action)) {
        waypoint.x += value * (action === 'W' ? -1 : 1);
    } else {
        waypoint.y += value * (action === 'N' ? -1 : 1);
    }
});

const answer = Math.abs(ship.x) + Math.abs(ship.y);

console.log(`Answer: ${answer}`);
