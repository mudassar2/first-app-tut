const {readFileSync , writeFileSync }=require('fs')
const first=readFileSync('./test.txt','utf8')
writeFileSync('./test.txt','This is added txt',{flag:'a'})
console.log(first)