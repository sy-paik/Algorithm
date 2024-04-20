const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

for(let i = 0; i < N; i++){
    input[i] += " " + i;
}

let arr = [];

for(let i = 0; i < N; i++){
    arr.push(input[i].split(" "));
}

arr.sort((a,b) => {
    if(a[0] === b[0]){
        return a[2] - b[2]
    } else {
        return a[0] - b[0]
    }
})

let answer = [];

for(let i = 0; i < N; i++){
    arr[i].pop();
    answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));