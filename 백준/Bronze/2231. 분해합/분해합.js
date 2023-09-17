const fs = require('fs');

const input = fs
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim();

const number = parseInt(input, 10);

let result = 1;

for (let i = 1; i < number; i++) {
  result = i;

  const stringValue = i.toString();

  for (let j = 0; j < stringValue.length; j++) {
    result += parseInt(stringValue[j], 10);
  }

  if (result === number) {
    console.log(i);
    return;
  }
}

console.log(0);