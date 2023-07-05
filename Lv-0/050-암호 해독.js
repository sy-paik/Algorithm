/* 문제 */
// 군 전략가 머쓱이는 전쟁 중 적군이 암호 체계를 사용합니다.
// 암호화된 문자열 cipher를 주고받습니다. 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열 return

/* 제한사항 */
// 1 <= cipher의 길이 <= 1,000
// 1 <= code <= cipher의 길이
// cipher는 소문자와 공백으로만 구성 (공백도 하나의 문자로 취급)

/* 입출력 예 */
// cipher = "dfjardstddetckdaccccdegk", code = 4, result = "attack";
// cipher = "pfqallllabwaoclk", code = 2, result = "fallback"

/* 내 답안 */
function solution(cipher, code) {
    let answer = '';
    for (let i = 0; i < cipher.length; i++) {
        if ((i+1) % code === 0) {
            answer += cipher[i];
        }
    }
    return answer;
}

/* 다른 사람의 풀이 */
function solution(cipher, code) {
    return cipher.split('').filter((v, i) => (i+1) % code  === 0).join('');
}

function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}

/* 파이썬 코드 */
/* def solution(cipher, code):
    answer = ''
    for i in range(len(cipher)):
        if((i+1) % code == 0):
            answer += cipher[i]
    return answer; */

/*  def solution(cipher, code):
    answer = ''
    for i in range(code-1, len(cipher), code):
        answer += cipher[i]
    return answer */
