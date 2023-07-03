/* 문제 */
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides가 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2 return

/* 제한사항 */
// sides의 원소는 자연수
// sides의 길이는 3

/* 입출력 예 */
// sides = [1, 2, 3], result = 2
// sides = [3, 6, 2], result = 2
// sides = [199, 72, 222], result = 1

/* 내 답안 */
function solution(sides) {
    const sum = sides.reduce((acc, curr) => acc + curr, 0);
    const max = Math.max(...sides);
    const answer = sum - max > max ? 1 : 2;
    return answer;
}

/* 다른 사람의 풀이 */
function solution(sides) {
    sides = sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
