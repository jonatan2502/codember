const fs = require('node:fs');

const data = fs.readFileSync('./encrypted.txt', 'utf8')

function encrypted(data) {
    let string = ''
    for (let i = 0; i < data.length;) {
        if (data[i] == 9) {
            const piece = data.slice(i, i+2)
            string = string.concat(String.fromCharCode(piece))
            i+=2
        } else if (data[i] === ' ') {
            string = string.concat(' ')
            i++
        } else {
            const piece = data.slice(i, i+3)
            string = string.concat(String.fromCharCode(piece))
            i+=3
        }
    }
    return string
}
    
console.log(encrypted(data))

