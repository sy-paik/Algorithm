function solution(n) {
  let answer = '';
  const even = '수';
  const odd = '박';
  for(let i = 0; i < n; i++) {
    if(i % 2 === 0) {
      answer += even;
    } else {
      answer += odd;
    }
  }
    return answer;
}