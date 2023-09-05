function solution(n) {
  let array = [];
    let answer = 0;
    while(n !== 0) {
        array.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    for (let i = 0; i < array.length; i++) {
        answer += array[i] * Math.pow(3, i);
    }
    return answer;
}