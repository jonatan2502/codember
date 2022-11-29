function guessPassword(start, end) {
    const validPasswords = []
    for (let num = start; num <= end; num++) {
        const found = num.toString().match(/5/g)
        if ((found ? found.length : 0) >= 2) {
            let greater = true
            for (let j = 0; j <= 3; j++) {
                if (greater && (num.toString()[j] <= num.toString()[j+1])) greater = true
                else greater = false     
            }
            if (greater) validPasswords.push(num)
        }
    }
    return `${validPasswords.length}-${validPasswords[55]}`
}

console.log(guessPassword(11098, 98123))
