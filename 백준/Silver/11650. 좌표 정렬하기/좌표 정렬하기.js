const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function sortPoints(points) {
    points.sort((a, b) => {
        if (a.x !== b.x) {
            return a.x - b.x;
        }
        return a.y - b.y;
    });
}

const N = parseInt(input[0]);

const points = input.slice(1).map(line => {
    const [x, y] = line.split(' ').map(Number);
    return { x, y };
});

sortPoints(points);

points.forEach(point => {
    console.log(`${point.x} ${point.y}`);
});
