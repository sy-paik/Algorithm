// #문제
// 정수가 들어 있는 배열 num_list가 매개변수로 주어진다. num_list의 원소의 순서를 거꾸로 뒤집은 배열 return

// #제한사항
// 1 <= num_list의 길이 <= 1,000
// 0 <= num_list의 원소 <= 1,000

// #입출력 예
// num_list = [1, 2, 3, 4, 5], result = [5, 4, 3, 2, 1]
// num_list = [1, 1, 1, 1, 1, 2], result = [2, 1, 1, 1, 1, 1]
// num_list = [1, 0, 1, 1, 1, 3, 5], result = [5, 3, 1, 1, 1, 0, 1]

// #내 답안
function solution(num_list) {
  let answer = [];
  for (let n of num_list) {
    answer.push(n);
  }
  return answer.reverse;
}

// #재시도한 답안
function solution(num_list) {
  let answer = [];
  for (let n of num_list) {
    answer.push(n);
  }
  return answer.reverse();
}

// #다른사람의 풀이
function solution(num_list) {
  let answer = num_list.reverse();
  return answer;
}

// #부족한 개념 정리
let arr = [1, 2, 3];
arr.reverse();

console.log(arr);
// 내림차순으로 정렬 시, sort() --> reverse()

// #array 메서드 정리
// 1. concat()
// : 주어진 배열이나 값들을 기존 배열에 합쳐 새 배열을 반환한다.
// - 기존 배열을 변경 X
// - 추가된 새로운 배열을 반환

// 2. fill()
// : 배열의 시작 인덱스 ~ 끝 인덱스 이전까지 값 하나로 채운다.
// arr.fill(value, start, end-1)

// 3. filter()
// : 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
// const words = ['abc', 'abcd', 'abcde', 'abcdef']
// const result = words,filter(word => word.length > 3);
// console.log(result);

// 4. forEach()
// : 주어진 함수를 배열 요소 각각에 대해 실행한다.
// const arr = ['a', 'b', 'c']
// arr.forEach(element => console.log(element));

// output: 'a'
// output: 'b'
// output: 'c'

// 5. join()
// : 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// const elements = ['hello', 'world']

// console.log(elements.join())
// output: 'hello,world'
// console.log(elements.join(''))
// output: 'helloworld'
// console.log(elements.join('-'))
// output: 'hello-world'

// 6. map()
// : 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
// const arr = [1, 2, 3, 4]
// const map1 = arr.map(x => x * 2)
// console.log(map1)
// output: [2, 4, 6, 8]

// 7. pop()
// : 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
// const arr1 = [1, 2, 3, 4, 5]
// console.log(arr1.pop())
// output: 5
// console.log(arr1)
// output: [1, 2, 3, 4]

// 8. shift()
// : 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환한다. + 배열의 길이를 변하게 한다.
// const arr = [1, 2, 3, 4]
// const first = arr.shift()
// console.log(first)
// output: 1
// console.log(arr)
// output: [2, 3, 4]

// 9. push()
// : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
// const names = ['james', 'alice', 'sarah']
// const new = names.push('jay')
// console.log(names)
// output: ['james', 'alice', 'sarah', 'jay']

// 10. reverse()
// : 배열의 순서를 반전한다.

// 11. slice()
// : 어떤 배열의 begin ~ end까지의 복사본을 새로운 배열 객체로 반환한다. ([주의] 원본 배열은 바뀌지 않는다)
// const arr = ['a', 'b', 'c', 'd']
// console.log(arr.slice(0, 3))
// ['a', 'b', 'c']

// 12. splice()
// : 배열의 기존 요소를 삭제 | 교체 | 추가하여 배열의 내용을 변경한다! (배열이 바뀐다!)
// group.splice(start, deleteCount, item...)
// const group = ['sarah','james', 'alice', 'bob']
// group.splice(0, 0, 'joey')
// output: ['joey', 'sarah', 'james', 'alice', 'bob']
// group.splice(2, 1, 'amy')
// output: ['joey', 'sarah', 'amy', 'alice', 'bob']
