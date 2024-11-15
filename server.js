const http = require('http')
const fs = require('fs')
const server =  http.createServer((req, res)=> {
    const goal = req.url
    switch (goal) {
        case '/':
            fs.readFile('./index.html', (err, data)=> {
                res.write(data)
                res.end()
            })
            break
        case '/about':
            fs.readFile('./about.html', (err,data)=> {
                res.write(data)
                res.end()
            })
            break
        case '/contact-me':
            fs.readFile('./contact-me.html', (err,data)=> {
            res.write(data)
            res.end()
            })
            break
        default:
            fs.readFile('./404.html', (err, data)=> {
                res.statusCode = 404
                res.write(data)
                res.end()
            })
    }
})
server.listen(8080)
