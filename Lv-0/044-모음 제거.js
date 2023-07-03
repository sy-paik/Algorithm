/* 문제 */
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return

/* 제한사항 */
// my_string은 소문자와 공백으로 이루어져 있다.

/* 입출력 예 */
// my_string = "bus", result = "bs";
// my_string = "nice to meet you", result = "nc t mt y";

/* 내 답안 */
function solution(my_string) {
    return my_string.replaceAll(/[aeiou]/gi, '');
}

/* 다른 사람의 풀이 (switch + splice) */
function solution(my_string) {
    let answer = my_string.split('');
    for (let i = 0; i < answer.length; i++) {
        switch (answer[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                answer.splice(i, 1);
                i--;
                break;
        }
    }
    return answer.join('');
}

/* 다른 사람의 풀이2 (includes) */
function solution(my_string) {
    let answer = '';
    let alpha = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < my_string.length; i++) {
        if (!alpha.includes(my_string[i])) {
            answer += my_string[i];
        }
    }
    return answer;
}
