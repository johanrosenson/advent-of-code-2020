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

        containsMap.set(color, amount);
    });

    rules.set(color, containsMap);
});

const bagCanContain = function (bag, color) {
    if (rules.get(bag).has(color)) {
        return true;
    }

    for (let innerBag of rules.get(bag).keys()) {
        if (bagCanContain(innerBag, color)) {
            return true;
        }
    }

    return false;
}

let answer = 0;

for (let bag of rules.keys()) {
    if (bagCanContain(bag, 'shiny gold')) {
        answer += 1;
    }
}

console.log(`Answer: ${answer}`);
