const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

let trees = 0;

for (y in rows) {
    const x = y * 3;
    const char = rows[y].charAt(x % rows[y].length);

    if (char === '#') {
        trees += 1;
    }
}

console.log(`Trees input.txt: ${trees}`);
