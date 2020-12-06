const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

const decode = function (input, lower, upper) {
    let range = [...Array(2 ** input.length).keys()];

    for (i = 0, imax = input.length; i < imax; i++) {
        range = input.charAt(i) === lower
            ? range.slice(0, range.length / 2)
            : range.slice(range.length / 2);

    }

    return range[0];
};

const answer = rows.reduce(function (carry, boardingPass) {
    const row = decode(boardingPass.substr(0, 7), 'F', 'B');
    const column = decode(boardingPass.substr(-3), 'L', 'R');

    const seatId = row * 8 + column;

    return seatId > carry
        ? seatId
        : carry;
}, 0);

console.log(`Answer: ${answer}`);
