const fs = require('fs');

const passwords = fs.readFileSync('input.txt', 'utf8').split('\n');

const validPasswords = passwords.reduce(function (carry, input) {
    [pos1, pos2, target, password] = input.split(/-|: | /);

    const char1 = password.charAt(parseInt(pos1) - 1);
    const char2 = password.charAt(parseInt(pos2) - 1);

    const valid = (char1 === target) // if char1 matches...
        ? char2 !== target // ...we dont want char2 to match
        : char2 === target; // ...but if char1 did'nt match, then we do want char2 to match

    return valid
        ? carry + 1
        : carry;
}, 0);

console.log(`Valid passwords in input.txt: ${validPasswords}`);
