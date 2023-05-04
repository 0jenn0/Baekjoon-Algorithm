let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i ++ ) {
    const line = input[i].split(' ')
    const [age,name] = [Number(line[0]),line[1]]
    arr.push([age,name])
}
                        
const compare = (a,b) => {
    if(a[0] !== b[0]) return a[0]-b[0]
    else return 0
                        }

arr.sort(compare)

let result = ""

for ( x of arr) result += `${x[0]} ${x[1]}` + '\n'
console.log(result)