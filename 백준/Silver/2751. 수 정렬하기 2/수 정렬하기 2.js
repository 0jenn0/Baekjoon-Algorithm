let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0])

let arr = input.slice(1,N+1).map(Number)

arr.sort((a,b)=> a -b )

let result =""
arr.forEach(num => result += num + '\n')

console.log(result)