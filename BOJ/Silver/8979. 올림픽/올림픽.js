const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const countries = input
  .slice(1)
  .map((line) => line.split(" ").map(Number));

const rankings = Array.from({ length: N }, () => 1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const [gold1, silver1, bronze1] = countries[i].slice(1);
    const [gold2, silver2, bronze2] = countries[j].slice(1);
    if (
      gold1 > gold2 ||
      (gold1 === gold2 && silver1 > silver2) ||
      (gold1 === gold2 && silver1 === silver2 && bronze1 > bronze2)
    ) {
      rankings[j]++;
    }
  }
}

const rank = rankings[countries.findIndex(([name]) => name === K)];
console.log(rank);
