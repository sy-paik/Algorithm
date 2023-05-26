function solution(sides) {
    return sides.reduce((acc, curr) => acc + curr) - Math.max(...sides) + Math.min(...sides) - 1;
}
