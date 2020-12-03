const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n');

const countTrees = function (right, down) {
    let trees = 0;

    for (y = 0, ymax = rows.length; y < ymax; y += down) {
        const x = (y * right) / down;
        const char = rows[y].charAt(x % rows[y].length);

        if (char === '#') {
            trees += 1;
        }
    }

    return trees;
};

const trees = [
    countTrees(1, 1),
    countTrees(3, 1),
    countTrees(5, 1),
    countTrees(7, 1),
    countTrees(1, 2),
].reduce((a, b) => a * b, 1);

console.log(`Trees input.txt: ${trees}`);
