const a =require('./names.js')
console.log(a.name1)
//setInterval(() => {
//console.log(__dirname)
//},1000)


const hifun=((name) => {
	
	console.log('Hello Mr ' +name)
})
hifun('Mudassar Riaz')

const addnumbers=((n1,n2)=> {
	
	add=n1+n2
	console.log(add)
	
})
const number=require('./numbers.js')
addnumbers(number.n1,number.n2)



const os=require('os')

console.log(os.platform())
console.log(os.type())
console.log(os.version())
console.log(os.userInfo())
console.log(os.uptime())