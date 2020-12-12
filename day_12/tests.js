
const testRotate = function (input, direction, degrees, expected) {
    const output = rotate(input, direction, degrees);

    if (output.x === expected.x && output.y === expected.y) {
        console.log('✅ test passed');
    } else {
        console.error('❌ test failed');
    }
}

testRotate({
    x: -1, // west 1
    y: -10, // north 10
}, 'R', 90, {
    x: 10, // east 10
    y: -1, // north 1
});

testRotate({
    x: -8, // west 8
    y: 0,
}, 'L', 90, {
    x: 0,
    y: 8, // south 8
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'R', 90, {
    x: 4, // east 4
    y: 10, // south 10
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'R', 180, {
    x: -10, // west 10
    y: 4, // south 4
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'R', 270, {
    x: -4, // west 4
    y: -10, // north 10
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'L', 90, {
    x: -4, // west 4
    y: -10, // north 10
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'L', 180, {
    x: -10, // west 10
    y: 4, // south 4
});

testRotate({
    y: -4, // north 4
    x: 10, // east 10
}, 'L', 270, {
    x: 4, // east 4
    y: 10, // south 10
});

testRotate({
    x: 10, // east 10
    y: 2, // south 2
}, 'L', 180, {
    x: -10, // west 10
    y: -2, // north 2
});
