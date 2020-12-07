const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

let rules = new Map;

rows.forEach(function (row) {
    [color, contains] = row.replace(/\.$/, '').split(' bags contain ');

    let containsMap = new Map;

    contains.split(', ').forEach(function (allowed) {
        if (allowed === 'no other bags') {
            return;
        }

        const [, amount, color] = allowed.replace(/ bags?/, '').match(/^(?<amount>\d+) (?<color>.+)$/);

        containsMap.set(color, parseInt(amount));
    });

    rules.set(color, containsMap);
});

const mustContain = function (bag) {
    return Array.from(rules.get(bag).values()).reduce((carry, value) => value + carry, 0) +
        Array.from(rules.get(bag).keys()).reduce(function (carry, innerBag) {
            return carry + mustContain(innerBag) * rules.get(bag).get(innerBag);
        }, 0);
}

let answer = mustContain('shiny gold');

console.log(`Answer: ${answer}`);
