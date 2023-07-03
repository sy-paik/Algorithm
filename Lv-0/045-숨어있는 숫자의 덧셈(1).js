/* 문제 */
// 문자열 my_string이 매개변수로 주어집니다.
// my_string 안의 모든 자연수들의 합을 return

/* 제한사항 */
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

/* 입출력 예 */
// my_string = 'aAb1B2cC34oOp'; result = 10
// my_string = '1a2b3c4d123'; result = 16

/* 내 답안 */
function solution(my_string) {
    let answer = 0;
    const num = my_string.replace(/[^0-9]/g, '').split('');
    for (let i = 0; i < num.length; i++) {
        answer += parseInt(num[i]);
    }
    return answer;
}

/* 다른 사람의 풀이 */
function solution(my_string) {
    const answer = my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

/* 다른 사람의 풀이2 */
function solution(my_string) {
    return [...my_string].reduce(
        (acc, curr) => (Number(curr) ? +acc + curr : acc),
        0
    );
}
