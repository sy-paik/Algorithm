function solution(s) {
    return s.split('').map((char, index) => {
        const substring = s.substring(0, index); // 현재 문자까지의 부분 문자열
        const lastIndex = substring.lastIndexOf(char); // 현재 문자의 앞에서부터 가장 가까운 동일한 문자의 인덱스
        
        if (lastIndex === -1) {
            return -1; // 동일한 문자가 없을 때
        } else {
            return index - lastIndex; // 현재 위치와 가장 가까운 동일한 문자의 거리
        }
    });
}