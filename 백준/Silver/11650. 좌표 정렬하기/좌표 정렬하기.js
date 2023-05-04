const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let arr = [];

for (let i=1; i <= N; i++) {
     arr.push(input[i].split(' ').map(Number))
}

const compare = (a,b) => {
     if(a[0] != b[0]) 
        return a[0]-b[0];
    else return a[1]-b[1];
}
arr.sort(compare);


let result = ""

arr.forEach((position) => {
    result += `${position[0]} ${position[1]}` + '\n';
}) 

console.log(result);