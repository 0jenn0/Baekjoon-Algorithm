const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = Number(input[0])

const arr = [...new Set(input.slice(1,N+1))];

const compare = (a,b) => {
   if(a.length === b.length) {
       if(a<b) return -1;
       else if(a>b) return 1;
       else return 0
   }
    else return a.length - b.length
}

arr.sort(compare)

let result = ""

arr.forEach(str => result += str + '\n')

console.log(result)