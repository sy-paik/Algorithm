const fs = require('fs');

function solution(N) {
    let constructor = 1;

    while (constructor <= N) {
        const eachNum = constructor.toString().split('');
        const sum = eachNum.reduce((acc, eachNum) => acc + parseInt(eachNum), 0);

        if (constructor + sum === N) {
            return constructor;
        }

        constructor++;
    }

    return 0;
}

const input = fs.readFileSync("/dev/stdin", "utf8").toString().trim();
const number = parseInt(input, 10);

const minConstructor = solution(number);

console.log(minConstructor);
