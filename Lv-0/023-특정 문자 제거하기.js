// #문제
// 문자열 my_string과 문자 letter이 매개변수로 주어진다. my_string에서 letter를 제거한 문자열 return

// #제한사항
// 1 <= my_string의 길이 <= 100
// letter은 길이가 1인 영문자이다.
// my_string과 letter은 알파벳 대소문자로 이루어져있다.
// 대문자와 소문자를 구분한다.

// #입출력 예
// my_string = "abcdef"
// letter = "f"
// result= "abcde"
// my_string = "BCBdbe"
// letter = "B"
// result = "Cdbe"

// # 내 오답
// function solution(my_string, letter) {
//   for (let i = 0; i < my_string.length; i++) {
//     if (my_string[i] == letter) {
//       my_string.replaceAll(letter, "");
//     }
//   }
//   return my_string;
// }

// # 다시 푼 답안
function solution(my_string, letter) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i];
    if (my_string[i] == letter) {
      answer = answer.replaceAll(letter, "");
    }
  }
  return answer;
}

// # 답안
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// # 느낀점
// 굳이 for문을 이용하지 않고 replace()를 사용하여 바로 return 하는 것이 더 깔끔하고 간결한 코드이기 때문에 불필요한 코드는 지양해야한다.
