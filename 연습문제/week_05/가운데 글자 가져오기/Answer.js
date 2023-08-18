function solution(s) {
    for(let i = 0; i < s.length; i++) {
        let answer = '';
        // 짝수일 때
        if(s.length % 2 == 0) {
            answer += s[parseInt((s.length / 2) - 1)] + s[parseInt(s.length / 2)]
        } else {
            answer += s[parseInt(s.length / 2)]
        }
        return answer
    }
}