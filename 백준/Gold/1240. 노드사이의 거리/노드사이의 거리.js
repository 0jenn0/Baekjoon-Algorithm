let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
    let [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

let visited = new Array(n + 1); // 전역 스코프에서 선언
let distance = new Array(n + 1);

function dfs(x, dist) {
    if (visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (let [y, cost] of graph[x]) {
        dfs(y, dist + cost);
    }
}

for (let i = 0; i < m; i++) {
    let [x, y] = input[n + i].split(' ').map(Number);
    visited.fill(false); // 각 쿼리마다 배열을 초기화
    distance.fill(-1);
    dfs(x, 0);
    console.log(distance[y]);
}
