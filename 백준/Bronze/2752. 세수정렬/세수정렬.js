let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number);

arr.sort((a,b)=> a - b);

let result = "";

arr.forEach((num)=> result += `${num} `) 


console.log(result);