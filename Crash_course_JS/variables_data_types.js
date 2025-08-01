/*
We have this Data Types:
String- anything sorrounded in double quotes or single quotes
boolean - true or false value inlowcase
number 12, 190.1
undefined- type as well as the value. Value is assigned later on
Null- type as well as the value. We set something to Nothing.
*/

// Use the var, let, const  keyword
//use camel case when calling variable avoid snake_case

//let keyword allows us to declare variables that can be changed later on
//const keyword variables cannot be changed. If stored an Array we can change

//N/B: let and const are block scope. var is function scope(access variable in our program).



/*Calculate area of a circle pi is 3.142*/
const prompt = require('prompt-sync')()

const pi = 3.142
    //get the radius
let radius = prompt("Enter Circle Radius: ")

let area = pi * radius * radius

console.log("Calculating.... ")
console.log()

console.log(`Area: ${area}`)