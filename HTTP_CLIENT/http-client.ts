import http = require('http')

function callback(response) {
    response.setEncoding('utf8')
    response.on('data', (data) => {
        console.log(data)
    })
}

http.get(process.argv[2], callback)