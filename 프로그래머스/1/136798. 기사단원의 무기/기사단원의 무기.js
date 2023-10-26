function solution(number, limit, power) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) { 
            if(i % j === 0) {
                if(j === Math.sqrt(i)) {
                    count++
                } else {
                    count += 2;
                }
            }
        }
        arr.push(count);
    }
    return arr.reduce((acc, cur) => (cur > limit ? power : cur) + acc, 0); 
}
