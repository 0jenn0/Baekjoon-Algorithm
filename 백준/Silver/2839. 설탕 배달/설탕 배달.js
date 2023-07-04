let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;
let flag = false;

// 3A + 5B = N , 최소 A구하기.

while(n>=0) {
    if(n == 0 || n % 5 == 0) {
        cnt += parseInt(n / 5)
        flag = true;
        console.log(cnt)
        break;
    }
    n -= 3;
    cnt += 1;
}

if(flag == false) {
    console.log(-1)
}

