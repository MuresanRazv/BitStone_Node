import fs = require('fs');
let path: string = process.argv[2]

let buf = fs.readFileSync(path)
const content: string = buf.toString()
console.log(content.split("\n").length - 1)