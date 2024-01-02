const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = 0;
let testCase = 1;

const isCycle = (x, prev, graph, visited) => {
    visited[x] = true;
    for (const y of graph[x]) {
        if (!visited[y]) {
            if (isCycle(y, x, graph, visited)) return true;
        } else if (y !== prev) {
            return true;
        }
    }
    return false;
};

while (true) {
    const [n, m] = input[line].split(' ').map(Number);
    if (n === 0 && m === 0) break;

    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= m; i++) {
        const [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }

    const visited = new Array(n + 1).fill(false);
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i] && !isCycle(i, 0, graph, visited)) {
            cnt++;
        }
    }

    const message = cnt === 0 ? "No trees." 
                  : cnt === 1 ? "There is one tree." 
                  : `A forest of ${cnt} trees.`;
    console.log(`Case ${testCase}: ${message}`);

    line += m + 1;
    testCase++;
}
