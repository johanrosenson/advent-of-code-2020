require('../array');

const fs = require('fs');

const rows = fs.readFileSync([
    // 'example.txt',
    'input.txt',
][0], 'utf8').rows();

// const max = 59;
// const min = 7;
// const diff = 4;
// const sum = 129;

// let n = max - diff;

// while (n <= 18115) {
//     console.log({
//         departure: n,
//         // timestamp: n * max,
//         min: (((n * max) - diff) / min),
//         temp: (((n * max) + 2) / 31),
//     });

//     // n += sum / min;
//     n += (sum - max) * (sum / min);
// }

// process.exit();

const findDeparture = function (input) {
    const busses = input.split(',').filter((value) => value !== 'x').numeric();
    const offsets = input.split(',').numeric().map((value) => isNaN(value) ? null : value);

    console.log(busses);

    const max = busses.max();
    const maxOffset = offsets.indexOf(max);

    // const first = busses[0];
    // const min = busses.min();
    // const sum = busses.sum();
    // const last = busses[busses.length - 1];
    // const diff = offsets.indexOf(max);

    let iteration = max - maxOffset;

    let departures = [];

    while (departures.length != busses.length) {
        console.log({
            iteration: iteration,
        });

        departures = busses.map(function (bus) {
            // const departure = (max * n) - diff;

            time = (iteration * bus);

            return {
                bus: bus,
                time: time,
            }
        }).filter(function (departure, index, departures) {
            return departure.time === departures[0].time + offsets.indexOf(departure.bus);
        });

        iteration++;
        // iteration += min;
        // iteration += (sum - max) / (sum - min);
    }

    return departures[0].earliest;
};

const test = function (input, expected) {
    const start = process.hrtime();

    output = findDeparture(input);

    if (output === expected) {
        const [seconds, nanoseconds] = process.hrtime(start);
        console.info('✅ test passed in : %ds %dms', seconds, nanoseconds / 1000000);
    } else {
        console.error('❌ test failed, got ' + output + ', expected: ' + expected);
    }
}

const solve = function(input) {
    const start = process.hrtime();

    output = findDeparture(input);

    console.info('✅ solution found in : %ds %dms', seconds, nanoseconds / 1000000);

    return output;
}

test('7,13,x,x,59,x,31,19', 1068781);
test('17,x,13,19', 3417);
test('67,7,59,61', 754018);
test('67,x,7,59,61', 779210);
test('67,7,x,59,61', 1261476);
test('1789,37,47,1889', 1202161486);

// const answer = solve(rows[1]);

// console.log(`Answer: ${answer}`);
