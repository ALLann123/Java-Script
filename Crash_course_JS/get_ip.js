//create prompt
const prompt = require('prompt-sync')()
console.log("*************************************")
console.log("            ENTER IPS")
console.log("*************************************")
console.log()

//create an empty array
const ip = []
let userInput

//get the 4 IPs from user
for (let i = 1; i < 5; i++) {
    userInput = prompt('Enter IP>> ')
    ip.push(userInput)
    console.log(`Added: ${userInput}`)
}


//display
for (let i of ip) {
    console.log()
    console.log(`${i} Starting Attack...`)
}

console.log()
console.log("BYE!!")