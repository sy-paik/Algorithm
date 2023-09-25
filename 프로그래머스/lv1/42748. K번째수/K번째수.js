function solution(array, commands) {
    var answer = [];
    let n = commands.length;
    for(let i = 0; i < n; i++) {
        let sorted = array.slice(commands[i][0]-1, commands[i][1])
        sorted.sort((a, b) => a - b);
        answer.push(sorted[commands[i][2]-1])
    }
    return answer;
}