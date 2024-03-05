const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

for (let i = 1; i < N + 1; i++) {
    const brackets = input[i].trim();
    let count = 0;

    for (let j = 0; j < brackets.length; j++) {
        if (brackets[j] === '(') {
            count++;
        } else {
            if (count === 0) {
                count = -1;
                break;
            } else {
                count--;
            }
        }
    }

    console.log(count ? 'NO' : 'YES');
}
