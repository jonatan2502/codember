const fs = require('node:fs');

const data = fs.readFileSync('./users.txt', 'utf8').split(/\r?\n/)
const users = []
let aux = []
const validUsers = []
let count = 0
const fields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

for (const user of data) {
    if (user !== '') aux = aux.concat(user.split(/[\s:]+/))
    else {
        users.push(aux)
        aux = []
    }
}

for (let i = 0; i < users.length; i++) {
    const valid = fields.every(field => users[i].includes(field))
    if (valid) {
        validUsers.push(users[i])
        count += 1
    }
}

console.log(count, validUsers.pop())

