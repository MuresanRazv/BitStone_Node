let args: String[] = process.argv.slice(2)
let sum: number = 0
for (let arg of args) {
    sum += Number(arg)
}
console.log(sum)