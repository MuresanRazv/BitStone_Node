import fs = require('fs')
import path = require("path");

module.exports = func

function func(dir: string, ext: string, callback) {
    fs.readdir(dir, "utf-8", function (err, data) {
        let res: string[] = []
        if (err) return callback(err)
        for (let file of data) {
            if (path.extname(file) === "." + ext)
                res.push(file)
        }
        return callback(null, res)
    })
}