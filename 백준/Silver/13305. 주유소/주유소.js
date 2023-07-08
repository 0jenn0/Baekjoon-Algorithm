let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let priceArr = input[1].split(' ').map(Number);
let townArr = input[2].split(' ').map(Number);

let min = townArr[0];

for(let i = 1; i < n; i++) {
    if(townArr[i] >= min) {
        townArr[i] = min;
    } else { min = townArr[i];}
}

let result = 0;
for(let i = 0; i< n-1; i++) {
    result += townArr[i] * priceArr[i];
}

console.log(result);