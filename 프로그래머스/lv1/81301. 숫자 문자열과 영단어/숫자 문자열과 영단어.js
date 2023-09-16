function solution(s) {
    const numberObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    for (const word in numberObj) {
        s = s.split(word).join(numberObj[word]);
    }
    return parseInt(s);
}




