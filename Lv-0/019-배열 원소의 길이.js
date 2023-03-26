// #문제
// 문자열 배열 strlist가 매개변수로 주어진다. strlist 각 원소의 길이를 담은 배열을 return

// #제한사항
// 1 <= strlist 원소의 길이 <= 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

// #입출력 예
// strlist = ["We", "are", "the", "word!"], result= [2, 3, 3, 6]
// strlist= ["I", "Love", "Programmers"], result = [1, 4, 12]

// #내 답안
function solution(strlist) {
  let answer = [];
  for (let n of strlist) {
    answer.push(n.length);
  }
  return answer;
}

// #다른사람의 풀이
function solution(strlist) {
  let answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}
