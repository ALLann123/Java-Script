//get the user input from the input box
const input = document.getElementById('input')

//FUnction- Reusable block of code you can call as many times you want.
function reverseString(str) {
    //the function creates an array of each character of the array, then reveres it and finally joins all the characters of the array together
    return str.split("").reverse().join("")
}

//Array is a collection of elements that are ordered

function check() {
    //gets the value inserted from the input box
    const value = input.value
    const reverse = reverseString(value)
        //compare the values for equality
    if (value === reverse) {
        alert('P A L I N D R O M E')
    } else {
        alert("Not Today!!")
    }
    //clearing the input box
    input.value = ""
}