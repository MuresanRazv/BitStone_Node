import fs = require('fs')
const path: string = process.argv[2]
const ext = process.argv[3]

function callback(err, list) {
    if (!err) {
        for (let file of list)
            if (file.endsWith("." + ext))
                console.log(file)
    }
}

fs.readdir(path, "utf-8", callback)