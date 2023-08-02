from itertools import permutations

def solution(k, dungeons):
    answer = -1
    for permus in permutations(dungeons, len(dungeons)):
        energy = k
        cnt = 0
        for permu in permus:
            if permu[0] <= energy:
                energy -= permu[1]
                cnt += 1
        answer = max(answer, cnt)
    return answer