const fs = require('fs');

const passwords = fs.readFileSync('input.txt', 'utf8').split('\n');

const validPasswords = passwords.reduce(function (carry, input) {
    [min, max, target, password] = input.split(/-|: | /);

    const filtered = password.replace(new RegExp(`[^${target}]`, 'g'), '');

    return filtered.length >= parseInt(min) && filtered.length <= parseInt(max)
        ? carry + 1
        : carry;
}, 0);

console.log(`Valid passwords in input.txt: ${validPasswords}`);
