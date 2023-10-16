function solution(answers) {

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let scores = [0, 0, 0];
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == arr1[i % arr1.length]) scores[0]++
        if(answers[i] == arr2[i % arr2.length]) scores[1]++
        if(answers[i] == arr3[i % arr3.length]) scores[2]++
    }
    let maxScore = Math.max(...scores);
    let answer = [];
    for(let i = 0; i < scores.length; i++) {
        if(maxScore == scores[i]) {
            answer.push(i+1)
        } 
    }
    return answer;
}