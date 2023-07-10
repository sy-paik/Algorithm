/* 문제 */
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지 return

/* 제한사항 */
// hp는 자연수
// 0 <= hp <= 1000

/* 입출력 예 */
// hp = 23, result = 5
// hp = 24, result = 6
// hp = 999, result = 201

/* 내 답안 */
function solution(hp) {
    const first = 5;
    const second = 3;
    const third = 1;
    const result =
        hp / first + (hp % first) / second + ((hp % first) % second) / third;
    return result;
}

/* 다른 사람의 풀이 */
function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

/* 파이썬 코드 */
/*
def solution(hp):
    return hp // 5 + (hp % 5 // 3) + ((hp % 5) % 3)
*/
