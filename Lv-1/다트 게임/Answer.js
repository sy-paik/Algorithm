/* 내 풀이 */
function solution(dartResult) {
    var score = 0;
    var answer = [];
    var temp = 0; // 숫자 담을 변수

    for (let i = 0; i < dartResult.length; i++) {
        if(!isNaN(parseInt(dartResult[i]))) {
            if(dartResult[i] === '1' && dartResult[i+1] === '0') {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] === 'S') {
            answer.push(temp);
        } else if (dartResult[i] === 'D') {
            answer.push(Math.pow(temp, 2));
        } else if (dartResult[i] === 'T') {
            answer.push(Math.pow(temp, 3));
        } else if (dartResult[i] === '#') {
            answer[answer.length - 1] *= -1; 
        } else if (dartResult[i] === '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        // 보너스, 옵션 적용된 점수들 합치기
        score += answer[i];
    }
    return score;
}

/* 참고할 풀이 */
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);
    //  /\d.?\D/g ==> \d : 숫자, .? : 선택적인 문자(없을 수도 있음), \D : 숫자가 아닌 문자에 대응
    // 1S2D*3T ==> ["1S", "2D*", "3T"]

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}