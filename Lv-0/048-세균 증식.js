/* 문제 */
// 어떤 세균은 1시간에 두배만큼 증식한다고 한다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때,
// t시간 후 세균의 수를 return

/* 제한사항 */
// 1 <= n <= 10
// 1 <= t <= 15

/* 입출력 예 */
// n = 2, t = 10, result = 2048;
// n = 7, t = 15, result = 229,376;

/* 내 답안 */
function solution(n, t) {
    const answer = n * 2 ** t;
    return answer;
}

/* 다른 사람의 풀이 */
function solution(n, t) {
    let answer = n;
    for (let i = 0; i < t; i++) {
        answer *= 2;
    }
    return answer;
}

/* 파이썬 코드 */
/* def solution(n, t):
    return n * 2 ** t;
*/
