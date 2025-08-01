//get user input

const prompt = require('prompt-sync')()

let numbers = []
let userInput
    //use a while loop
while (true) {
    userInput = prompt("Enter Number>> ")
    numbers.push(parseInt(userInput))
    if (numbers.length === 5) {
        console.log("ENough NUMBERS!!!")
        break;
    }
}

//now display all the numbers
console.log()
console.log("Numbers Entered: ")

for (let num of numbers) {
    console.log(num)
}