//collect user input from keyboard. Only works for the backend

const prompt = require('prompt-sync')()

const student_name = prompt("Enter your Name: ")

console.log(`Student Name: ${student_name}`)