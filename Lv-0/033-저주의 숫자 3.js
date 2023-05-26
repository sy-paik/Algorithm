function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        answer += 1;
        while (answer % 3 === 0 || String(answer).includes('3')) {
            answer += 1;
        }
    }
    return answer;
}
