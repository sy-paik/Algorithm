function solution(price, money, count) {
    let n = 1;
    let total = 0;
    while(n <= count) {
        total += price * n;
        n++;
    }
    return total > money ? total - money : 0;
}