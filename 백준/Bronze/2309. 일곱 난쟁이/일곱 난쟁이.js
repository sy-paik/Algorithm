const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(arr){
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  arr.sort((a, b) => a - b);
 
  for (let i = 0; i < 8; i++){
    for (let j = i+1; j < 9; j++){
      if ((sum - (arr[i] + arr[j])) === 100){
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}
 
const answer = solution(input);
console.log(answer.join("\n"));