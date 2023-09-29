function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    const filtered =  Array.from(s).filter(char => !isNaN(Number(char)));
    return filtered.length === s.length
}