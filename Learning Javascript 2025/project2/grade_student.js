//get the student grade
//get user input for marks
const prompt = require('prompt-sync')()

const studentMarks = prompt("Enter the Student Marks: ")

console.log("GENERATING GRADE....")


let grade;
//use if else statements
if (studentMarks >= 80 && studentMarks <= 100) {
    grade = 'A'
    console.log("Grade:", grade)
} else if (studentMarks >= 70) {
    grade = 'B'
    console.log('Grade: ', grade)
} else if (studentMarks >= 60) {
    grade = 'C'
    console.log('Grade: ', grade)
} else if (studentMarks >= 50) {
    grade = 'D'
    console.log('Grade: ', grade)
} else if (studentMarks < 50) {
    console.log("Failed!!!")
} else {
    console.log('Invalid Input!!')
}