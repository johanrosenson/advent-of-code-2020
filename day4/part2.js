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
    const containsAllFields = ! requiredFields.some(function (requiredField) {
        return ! fields.some((field) => requiredField === field.key);
    });

    if (! containsAllFields) {
        return carry;
    }

    const byr = parseInt(fields.find((field) => field.key === 'byr').value);

    if (byr < 1920 || byr > 2002) {
        return carry;
    }

    const iyr = parseInt(fields.find((field) => field.key === 'iyr').value);

    if (iyr < 2010 || iyr > 2020) {
        return carry;
    }

    const eyr = parseInt(fields.find((field) => field.key === 'eyr').value);

    if (eyr < 2020 || eyr > 2030) {
        return carry;
    }

    const hgt = fields.find((field) => field.key === 'hgt').value.match(/(?<value>[0-9]+)(?<unit>.+)/);

    if (hgt.groups.unit === 'in') {
        const height = parseInt(hgt.groups.value);

        if (height < 59 || height > 76) {
            return carry;
        }
    } else { // cm
        const height = parseInt(hgt.groups.value);

        if (height < 150 || height > 193) {
            return carry;
        }
    }

    const hcl = fields.find((field) => field.key === 'hcl').value;

    if (hcl.match(/^#[0-9a-f]{6}$/) === null) {
        return carry;
    }

    const ecl = fields.find((field) => field.key === 'ecl').value;

    if (! ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) {
        return carry;
    }

    const pid = fields.find((field) => field.key === 'pid').value;

    if (pid.match(/^[0-9]{9}$/) === null) {
        return carry;
    }

    return carry + 1;
}, 0);

console.log(`Answer: ${answer}`);
