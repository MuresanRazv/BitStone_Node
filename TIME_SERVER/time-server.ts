const net = require('net')

const server = net.createServer((socket) => {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1: `0${date.getMonth() + 1}`
    let day = date.getDate() > 10 ? date.getDate(): `0${date.getDate()}`
    let hour = date.getHours() > 10 ? date.getHours(): `0${date.getHours()}`
    let minute = date.getMinutes() > 10 ? date.getMinutes(): `0${date.getMinutes()}`
    socket.write(`${year}-${month}-${day} ${hour}:${minute}\n`)
    socket.end()
})
server.listen(process.argv[2])