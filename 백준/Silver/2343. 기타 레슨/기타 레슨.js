const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function canDivide(mid) {
  let cnt = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      return false; 
    }

    if (sum + arr[i] <= mid) {
      sum += arr[i];
    } else {
      cnt++;
      sum = arr[i];
    }
  }
  return cnt <= m;
}

function findMinimumSum() {
  let left = 1;
  let right = Math.max(...arr) * n; 
  let answer = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(mid)) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

const result = findMinimumSum();
console.log(result);
