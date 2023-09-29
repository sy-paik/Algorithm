function solution(number) {
    let ans = 0;
    const NUM = 3;
    const tmp = [];
    
    const backtrack = (cur) => {
        if(tmp.length === NUM){
            ans += tmp.reduce((a, b) => a + b) ? 0 : 1;
            return;
        }

        for(let i = cur; i < number.length; i++){
            tmp.push(number[i]);
            backtrack(i + 1);
            tmp.pop();
        }   
    }
    
    backtrack(0);
    
    return ans;
}