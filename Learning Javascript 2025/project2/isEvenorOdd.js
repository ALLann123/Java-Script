//get number from the user
const prompt = require('prompt-sync')()

const number = prompt('Enter Number: ')

//write a fnction to identify if its even or odd
function isEvenorOdd(number) {
    if (number % 2 === 0) {
        console.log("The Number", number, "is Even")
    } else {
        console.log("The Number", number, "is Odd")
    }
}


//call our function
isEvenorOdd(number)