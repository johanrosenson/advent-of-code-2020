const fs = require('fs');

const rows = fs.readFileSync('input.txt', 'utf8').split('\n\n');

const requiredFields = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid',
];

const answer = rows.reduce(function (carry, passport) {
    const fields = passport.split(/\s+/).map(function (field) {
        [key, value] = field.split(':');

        return {
            key: key,
            value: value,
        };
    });

    // does it contains all fields?
    let isValid = true;

    requiredFields.forEach(function (requiredField) {
        if (! fields.some((field) => requiredField === field.key)) {
            isValid = false;
        }
    });

    return isValid
        ? carry + 1
        : carry;
}, 0);

console.log(`Answer: ${answer}`);
