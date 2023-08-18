const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (req.url.includes("parsetime")) {
        const time = new Date(req.url.split('=')[1]);
        res.end(JSON.stringify({
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        }))
    }
    else {
        const time = new Date(req.url.split('=')[1]);
        res.end(JSON.stringify({
            "unixtime": time.getTime()
        }))
    }
})
server.listen(process.argv[2])