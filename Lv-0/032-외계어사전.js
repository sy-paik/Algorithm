function solution(spell, dic) {
    const sortedDic = dic.map(word => word.split('').sort().join(''));
    const sortedSpell = spell.sort().join('');
    return sortedDic.includes(sortedSpell) ? 1 : 2;
}
