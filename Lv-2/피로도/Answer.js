function solution(k, dungeons) {
    let answer = -1;
    const permutations = getPermutations(dungeons);

    for (const permus of permutations) {
        let energy = k;
        let cnt = 0;
        for (const permu of permus) {
            if (permu[0] <= energy) {
                energy -= permu[1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

function getPermutations(arr) {
    if (arr.length === 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const perms = getPermutations(rest);
        for (const perm of perms) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
}
