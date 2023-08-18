const mymodule = require('./mymodule')
const dir = process.argv[2]
const ext = process.argv[3]
mymodule(dir, ext, callback)

function callback(err, list) {
    if (!err) {
        console.log(list.join("\n"))
    }
    else console.log(err)
}