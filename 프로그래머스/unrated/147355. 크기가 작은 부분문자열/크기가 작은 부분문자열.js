function solution(t, p) {
  const result = [];

  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.slice(i, i + p.length);

    // 부분 문자열을 숫자로 변환하여 비교
    const substringNum = parseInt(substring);
    const pNum = parseInt(p);

    if (substringNum <= pNum) {
      result.push(substring);
    }
  }

  return result.length;
}