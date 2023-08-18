const bl = require('bl')
const http = require('http')

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8')
    response.pipe(bl((err, data) => {
        if (!err) {
            console.log(data.toString().length)
            console.log(data.toString())
        }
    }))
})