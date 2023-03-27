// #문제
// 옷가게는 10만원 이상 사면 5%, 30만원 이상 사면 10%, 50만원 이상 사면 20%를 할인해준다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return

// #제한사항
// 10 <= price <= 1,000,000,000
// 소수점 이하를 버린 정수를 return

// #입출력 예
// price = 150,000 , result = 142,500
// price = 580,000 , result = 464,000

// #내 오답
function solution(price) {
  if ((100, 000 <= price < 300, 000)) {
    price *= 0.95;
  } else if ((300, 000 <= price < 500, 000)) {
    price *= 0.9;
  } else {
    price *= 0.8;
  }
  return price;
}
