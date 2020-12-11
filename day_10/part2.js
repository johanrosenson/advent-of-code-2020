require('../array');

const fs = require('fs');

let adapters = fs.readFileSync('input.txt', 'utf8').rows().numeric().numsort();

console.log(adapters);

function solution(adapters) {
    const possibilites = adapters.reduce((possibilites, adapter) => {
        // calculate how many of the previous 3 can end up at current position
        possibilites[adapter] =
            (possibilites[adapter - 3] || 0) +
            (possibilites[adapter - 2] || 0) +
            (possibilites[adapter - 1] || 0)

        console.log(`at ${adapter}, there are ${possibilites[adapter]} possible routes here`);

        return possibilites;
    }, [1]);

    // return how many different way we can end up at the position
    return computed.pop();
}

const answer = solution(adapters);

console.log(`Answer: ${answer}`);
