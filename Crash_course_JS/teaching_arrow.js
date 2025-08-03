import PromptSync from 'prompt-sync'
const prompt=PromptSync()

//Arrow functions-Short syntax for writing functions in javascript


//example
//Write for calculating area

const length=parseInt(prompt("Enter length>> "))
const width=parseInt(prompt("Enter Width>> "))
console.log()

//this creates the function
const area=(length,width)=>length*width;

//we call the function while displaying the output
console.log(`Area: ${area(length,width)}`)
