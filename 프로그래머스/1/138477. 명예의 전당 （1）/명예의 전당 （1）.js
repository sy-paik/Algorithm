function solution(k, score) {
  const arr = [];
  const answer = [];

  for (const s of score) {
    if (arr.length < k) {
      arr.push(s);
      arr.sort((a, b) => b - a); 
      answer.push(Math.min(...arr));
    } else {
      if (arr[arr.length - 1] < s) {
        arr[arr.length - 1] = s;
        arr.sort((a, b) => b - a);
        answer.push(Math.min(...arr));
      } else {
        answer.push(Math.min(...arr));
      }
    }
  }

  return answer;
}




