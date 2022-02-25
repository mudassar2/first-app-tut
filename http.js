const http=require('http')
const server=http.createServer((req,res)=>{
	if(req.url == '/'){
	res.end('Welcome Home')	
	}
	if(req.url == '/about'){
	res.end('We are Here')
	}
res.end('Error')
})
server.listen(5000)