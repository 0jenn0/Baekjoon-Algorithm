let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let uniqueArr = [...new Set(arr)];

uniqueArr.sort((a,b)=> a - b);
// nums.forEach(num => result += arr.indexOf(num)+' ') 시간초과
let myMap = new Map();

for ( let i = 0 ; i < uniqueArr.length; i++) {
    myMap.set(uniqueArr[i],i);
}

let result ="";
for ( x of arr) result += myMap.get(x) + ' ';
console.log(result);