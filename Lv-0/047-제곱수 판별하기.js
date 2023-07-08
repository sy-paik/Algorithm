/* 문제 */
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 한다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1 아니라면 2 return

/* 제한사항 */
// 1 <= n <= 1,000,000

/* 입출력 예 */
// n = 144, result = 1
// n = 976, result = 2

/* 내 답안 */
function solution(n) {
    const answer = Math.sqrt(n);
    return answer % 1 === 0 ? 1 : 2;
}

/* 다른 사람의 풀이 */
function solution(n) {
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) return 1;
    }
    return 2;
}

/* 파이썬 코드 */
/* import math

def solution(n):
    answer = math.sqrt(n);
    if(answer % 1 == 0):
        return 1
    else:
        return 2
*/
