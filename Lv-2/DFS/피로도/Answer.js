function solution(k, dungeons) {
  let answer = [];  // 가능한 던전 탐험 개수를 저장할 배열
  let visited = Array(dungeons.length).fill(false);  // 각 던전 방문 여부를 저장하는 배열

  function dfs(count, k) {  // DFS 탐색 함수
    answer.push(count);  // 가능한 던전 탐험 개수를 배열에 저장

    for (let i = 0; i < dungeons.length; i++) {  // 모든 던전에 대해서
      let current = dungeons[i];  // 현재 던전 정보를 가져옴
      if (k >= current[0] && !visited[i]) {  // 현재 피로도로 탐험이 가능하고, 아직 방문하지 않았다면
        visited[i] = true;  // 던전을 방문 처리
        dfs(count + 1, k - current[1]);  // 다음 탐험으로 진행하고 피로도 갱신
        visited[i] = false;  // 다시 방문 여부 초기화
      }
    }
  }

  dfs(0, k);  // DFS 탐색 시작

  return Math.max(...answer);  // 가능한 던전 탐험 개수 중 최대값을 반환
}