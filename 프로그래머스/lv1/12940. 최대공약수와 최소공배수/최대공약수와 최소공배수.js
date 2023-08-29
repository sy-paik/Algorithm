function solution(n, m) {
    let answer = [];

    const greatest = (a, b) => {
        while (b !== 0) {
            const remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    };

    const least = (a, b) => (a * b) / greatest(a, b);

    return [greatest(n, m), least(n, m)];
}