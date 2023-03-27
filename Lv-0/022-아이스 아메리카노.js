// #문제
// 아이스 아메리카노는 한잔에 5,500원이다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return

// #제한사항
// 0 < money <= 1,000,000

// #입출력 예
// money = 5,500 , result = [1, 0]
// money = 15,000 , result = [2, 4000]

// #내 오답
function solution(money) {
  let answer = [];
  answer.push(money / 5500, money % 5500);
  return answer;
}

// #다시 시도한 답안
function solution(money) {
  let answer = [];
  answer.push(Math.floor(money / 5500), money % 5500);
  return answer;
}
