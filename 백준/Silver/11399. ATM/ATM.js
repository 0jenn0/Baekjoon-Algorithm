const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number)

arr.sort((a,b)=>(a-b))

let result = 0;

for(let i = 0 ; i < n ; i ++) {
    result += arr.slice(0,i+1).reduce((a,b)=> a + b)
}
console.log(result)