require('../array');

const fs = require('fs');

const input = [
    // 'example.txt',
    'input.txt',
];

const rows = fs.readFileSync(input[0], 'utf8').rows();

const departure = parseInt(rows[0]);
const busses = rows[1].split(',').filter((value) => value !== 'x').numeric();

const departures = busses.map(function (bus) {
    earliest = Math.ceil(departure / bus) * bus;

    return {
        bus: bus,
        earliest: earliest,
    }
}).sort((a, b) => a.earliest - b.earliest);

const answer = Math.abs(departure - departures[0].earliest) * departures[0].bus;

console.log(`Answer: ${answer}`);
