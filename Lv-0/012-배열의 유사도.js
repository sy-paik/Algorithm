// #문제
// 두 배열이 얼마나 유사한지 확인하고자 한다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return

// #제한사항
// 1 <= s1, s2의 길이 <= 100
// 1 <= s1, s2의 원소의 길이 <= 10
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있다.
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

// #입출력 예
// s1 = ["a", "b", "c"], s2 = ["com", "b", "d", "p", "c"], result = 2
// s1 = ["n", "omg"], s2 = ["m", "dot"], result = 0

// #내 답안
function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        answer += 1;
      }
    }
  }
  return answer;
}
