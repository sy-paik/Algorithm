function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < arr1.length; i++) {
        let binary1 = arr1[i].toString(2).padStart(n, 0);
        let binary2 = arr2[i].toString(2).padStart(n, 0);
        let code = '';
        for(let j = 0; j < n; j++) {
            if(binary1[j] === '0' && binary2[j] === '0') {
                code += ' '
            } else {
                code += '#'
            }
        }
        answer.push(code);
    }
    return answer;
}