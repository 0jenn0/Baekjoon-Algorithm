let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let cnt = 1;
let flag = false;

// 40021 -> 4002 -> 2001 -> 200 -> 100

while(b >= a) {
    if(b == a){
        flag = true;
        console.log(cnt);
        break;
    }
    if(b % 10 == 1) {
        b= parseInt(b / 10);
    } else if (b % 2 == 0) {
        b = parseInt(b/2);
    } else break;
    cnt += 1
}
if(!flag) {
    console.log(-1)
}