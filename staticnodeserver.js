const { readFileSync, read, readFile } = require('fs')
const http = require('http')
const homePage = readFileSync('./public/index.html')
const homeStyle = readFileSync('./public/style.css')
const homeLogic = readFileSync('./public/script.js')
const homeBackground = readFileSync('./public/background.jpg')

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if(req.url=='/style.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else if(req.url=='/script.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if(req.url=='/background.jpg'){
        res.writeHead(200, {'content-type':'image/jpg'})
        res.write(homeBackground)
        res.end()
    }
    else if(req.url=='/about'){
        // res.end('About Page')
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    
    }else{
        res.writeHead(404,{'content-type':"text/html"})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})
server.listen(5000, ()=>console.log(`Server is listening on port: 5000`))