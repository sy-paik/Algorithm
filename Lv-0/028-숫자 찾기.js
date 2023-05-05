/**
 * 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중 k가 있으면 그 숫자의 자리 수 return 
 * 없으면 -1을 return
 */

/**
 * num에 k가 여러 개 있으면 가장 처음 나타나는 자리 return
 */

function solution(num, k) {
    let answer = num.toString();
    if(answer.includes(k)) {
        return answer.indexOf(k) + 1
    } else {
        return -1
    }
}

// const numA = 29183, const k1 = 1
// console.log(solution(numA, k1)) // 3