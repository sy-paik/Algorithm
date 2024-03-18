const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

let i = 0, j = 0;
let answer = [];

while (i < n && j < m) {
  if (arr1[i] < arr2[j]) {
    answer.push(arr1[i]);
    i++;
  } else {
    answer.push(arr2[j]);
    j++;
  }
}

while (i < n) {
  answer.push(arr1[i]);
  i++;
}

while (j < m) {
  answer.push(arr2[j]);
  j++;
}

console.log(answer.join(' '));
