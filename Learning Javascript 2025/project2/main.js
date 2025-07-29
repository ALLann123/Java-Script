//Get user input using this
const prompt = require('prompt-sync')()


//this is our function to check if the number is a number and not a string
function getNumber(numberString) {
    while (true) {
        //Use the prompt above to get keyboard input
        const number = parseFloat(prompt("Enter Number" + numberString + ": "))
        if (isNaN(number)) {
            console.log("Invalid input")
        } else {
            return number
        }

    }
}

const number1 = getNumber('One');
const number2 = getNumber('Two');

const operator = prompt("Enter Sign: ")

//Popular operators:+,-,*,/,%

let result; //we can define a variable without assiging it a value
let valid = true;
switch (operator) {
    case "+":
        console.log("Performing Addition..")
        result = number1 + number2
        break;
    case "-":
        console.log("Performing Subtraction..")
        result = number1 - number2
        break;
    case "/":
        console.log("Performing Division...")
        if (number2 === 0) {
            valid = false
            console.log("Zero division error.")
        }
        result = number1 / number2
        break;
    case "*":
        console.log("Performing Multiplication..")
        result = number1 * number2
        break;
        //The default case is like the else statement in if statements
    default:
        console.log("Invalid!!")
        valid = false
        break;
}

if (valid) console.log(number1, operator, number2, "=", result)