const http=require('http')

const server=http.createServer((req,res)=>{
//     console.log('request made')
// console.log(req.url)
// res.write('<h1>hello</h1>')
res.end('<h1>hello</h1>')
})

server.listen(9999,'localhost',()=>{
    console.log('server runnunge http://localhost:9999')
})