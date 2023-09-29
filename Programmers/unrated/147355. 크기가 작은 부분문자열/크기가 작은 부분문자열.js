function solution(t, p) {
  let result = [];
  for(let i = 0; i <= t.length - p.length; i++) {
    const v = t.slice(i, i+p.length);
    const vNum = parseInt(v);
    const pNum = parseInt(p);
    if(vNum <= pNum) {
    result.push(vNum);
    }
  }
  return result.length
}