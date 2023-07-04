/* 문제 */
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1, 없다면 2를 return

/* 제한사항 */
// str1의 길이와 str2의 길이는 1과 100 사이
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

/* 입출력 예 */
// str1 = "ab6CDE443fgh22iJKlmn1o", str2 = "6CD", result = 1
// str1 = "ppprrrogrammers", str2 = "pppp", result = 2
// str1 = "AbcAbcA" str2 = "AAA", result = 2

/* 내 답안 */
function solution(str1, str2) {
    let answer = 0;
    if (str1.includes(str2)) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}

/* 다른 사람의 풀이 */
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2;
}

function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

/* 파이썬 코드 */
/* def solution(str1, str2):
  answer = 0;
  if str2 in str1:
    answer = 1;
  else:
    answer = 2;
  return answer; */
