// #문제
// 문자열 배열 strlist가 매개변수로 주어진다. strlist 각 원소의 길이를 담은 배열을 return

// #제한사항
// 1 <= strlist 원소의 길이 <= 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어있다

// #입출력의 예
// strlist = ["We", "are", "the", "world!"], result = [2, 3, 3, 6]
// strlist = ["I", "Love", "Programmers"], result = [1, 4, 12]

// #시도
function solution(strlist) {
  for (let i = 0; i < strlist.length; i++) {}
}

// #다른 사람의 풀이
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

// #다른 사람의 풀이2
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    let str = strlist[i].split("");
    answer.push(str.length);
  }
  return answer;
}

// #다른 사람의 풀이3
function solution(strlist) {
  var answer = [];
  for (let i in strlist) {
    answer.push(strlist[i].length);
  }
  return answer;
}

// #부족한 개념 정리
// 배열의 추가 삭제 함수에 대한 개념을 잊고 있어 다시 한번 복습!
var arr = ["a", "b", "c"];
arr.push("d"); // 배열의 끝에 요소를 추가!

arr.unshift("d"); // 배열의 앞쪽에 요소를 추가

arr.splice(2, 0, "d"); // index 2 ('c')의 위치에 요소를 추가

arr.splice(4, 0, "e", "f"); // index 4의 위치에 2개의 요소를 추가

arr.pop(); // 배열의 마지막 요소를 제거

arr.shift(); // 배열의 첫번째 요소를 제거

arr.splice(2, 1); // index 2부터 1개의 요소
