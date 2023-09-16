

function solution(strings, n) {
    return strings.sort((a, b) => {
        const charA = a[n];
        const charB = b[n];

        if (charA < charB) {
            return -1;
        } else if (charA > charB) {
            return 1;
        } else {
            return a < b ? -1 : 1;
        }
    });
}