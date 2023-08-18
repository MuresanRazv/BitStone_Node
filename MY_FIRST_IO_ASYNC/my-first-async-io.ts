import fs = require('fs')
const path: string = process.argv[2]

function callback(err, data) {
    if (err)
        console.log(err)
    else
        console.log(data.toString().split("\n").length - 1)
}

fs.readFile(path, callback)