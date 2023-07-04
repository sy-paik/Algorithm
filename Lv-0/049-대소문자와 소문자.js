/* 문제 */
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열 return

/* 제한사항 */
// 1 <= my_string의 길이 <= 1,000
// my_string은 영어 대문자와 소문자로만 구성

/* 입출력 예 */
// my_string = "cccCCC", result = "CCCccc";
// my_string = "abCdEfghIJ", result = "ABcDeFGHij";

/* 내 답안 */
function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toLowerCase()) {
            result += my_string[i].toUpperCase();
        } else {
            result += my_string[i].toLowerCase();
        }
    }
    return result;
}
