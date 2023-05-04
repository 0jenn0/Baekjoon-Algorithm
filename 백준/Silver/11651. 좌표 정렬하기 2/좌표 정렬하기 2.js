const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

let arr = [];

for ( let i = 1; i <= N; i ++) {
    arr.push(input[i].split(' ').map(Number))
}

const compare = (a,b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
}

arr.sort(compare)

let result = ""
arr.forEach((position) => result += `${position[0]} ${position[1]}` + '\n')
console.log(result)