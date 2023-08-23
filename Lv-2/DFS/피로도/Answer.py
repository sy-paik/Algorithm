def solution(k, dungeons):
    answer = []  # 가능한 던전 탐험 개수를 저장할 배열
    visited = [False] * len(dungeons)  # 각 던전 방문 여부를 저장하는 배열

    def dfs(count, k):  # DFS 탐색 함수
        answer.append(count)  # 가능한 던전 탐험 개수를 배열에 저장

        for i in range(len(dungeons)):  # 모든 던전에 대해서
            current = dungeons[i]  # 현재 던전 정보를 가져옴
            if k >= current[0] and not visited[i]:  # 현재 피로도로 탐험이 가능하고, 아직 방문하지 않았다면
                visited[i] = True  # 던전을 방문 처리
                dfs(count + 1, k - current[1])  # 다음 탐험으로 진행하고 피로도 갱신
                visited[i] = False  # 다시 방문 여부 초기화

    dfs(0, k)  # DFS 탐색 시작

    return max(answer)  # 가능한 던전 탐험 개수 중 최대값을 반환