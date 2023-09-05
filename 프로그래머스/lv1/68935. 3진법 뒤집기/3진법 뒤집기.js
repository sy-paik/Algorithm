function solution(n) {
  let array = [];
    let answer = 0;
    while(n !== 0) {
        array.push(n % 3);
        n = Math.floor(n / 3);
    }
    for (let i = 0; i < array.length; i++) {
        answer += array[i] * Math.pow(3, array.length - i -1);
    }
    return answer;
}