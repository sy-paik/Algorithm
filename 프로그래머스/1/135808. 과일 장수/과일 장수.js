function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => b - a);
    const box = Math.floor(score.length / m);
    for(let i = 1; i <= box; i++) {
        answer += score[i * m - 1] * m;
    }
    return answer;
}
