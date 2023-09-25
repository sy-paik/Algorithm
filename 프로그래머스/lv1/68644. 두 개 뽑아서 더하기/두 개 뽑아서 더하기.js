function solution(numbers) {
    const result = [];
    
    // 백트래킹을 이용한 조합 생성 함수
    function backtrack(index, combination) {
        if (combination.length === 2) {
            const sum = combination[0] + combination[1];
            result.push(sum);
            return;
        }
        
        for (let i = index; i < numbers.length; i++) {
            combination.push(numbers[i]);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }
    
    backtrack(0, []);
    
    const uniqueSortedResult = [...new Set(result)].sort((a, b) => a - b);
    
    return uniqueSortedResult;
}