const http=require('http')
const fs = require('fs')
const path=require('path')
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    // fs.readFile('./veiws/inde.html',(err,data)=>{
    //     if(err)
    //     {
    //         console.log(err)
    //         res.end()
    //     }
    //     res.end(data)

    // })
    let url
    switch(req.url){
        case '/':
            url='index.html'
            res.statusCode =200
            break
        case '/about':
            url='about.html'
            res.statusCode =200
            break;

        default:
            url='404.html'
            res.statusCode =404
            break;
    }
let filepath= path.join(__dirname,'veiws',url)
fs.readFile(filepath,(err,data)=>{
    if(err){
        res.statusCode =500
        console.log(err)
        res.end()
    }
    res.end(data)
})
})
const PORT= process.env.PORT|| 9999
server.listen(PORT,'localhost',()=>{
    console.log('server running at http://localhost:'+PORT)
})