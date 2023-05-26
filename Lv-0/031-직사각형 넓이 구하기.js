
function solution(dots) {
    let width = [];
    let height = [];
    for(let i = 0; i < dots.length; i++) {
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    let result = (Math.max(...width) - Math.min(...width)) * (Math.max(...height) - Math.min(...height));
    return result;
}
