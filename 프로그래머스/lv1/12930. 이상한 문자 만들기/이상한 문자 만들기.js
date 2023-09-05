function solution(s) {
    return s
        .split(' ')
        .map((i) =>
            i
                .split('')
                .map((value, index) =>
                    index % 2 === 0
                        ? value.toUpperCase()
                        : value.toLowerCase()
                ).join('')
        )
        .join(' ');
}