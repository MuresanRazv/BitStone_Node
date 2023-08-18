const http = require('http')
const bl = require('bl')

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8')
    response.pipe(bl((err, data) => {
        if (!err) {
            console.log(data.toString())
            http.get(process.argv[3], (response) => {
                response.setEncoding('utf8')
                response.pipe(bl((err, data) => {
                    if (!err) {
                        console.log(data.toString())
                        http.get(process.argv[4], (response) => {
                            response.setEncoding('utf8')
                            response.pipe(bl((err, data) => {
                                if (!err) {
                                    console.log(data.toString())
                                }
                            }))
                        })
                    }
                }))
            })
        }
    }))
})