console.log("THE JAVASCRIPT SHELL")
console.log()

//function to find if password is true
function checkGuess(word) {
    if (word == 'matunda99') {
        console.log('Access Granted🎉')
        console.log()
        console.log('Shell>> ')

        return true
    } else {
        console.log('Wrong Password. Try Again!!🏴‍☠️')

        return false
    }
}

//get the password, create the prompt
const prompt = require('prompt-sync')()

//now get the password attempts
let counter = 0
while (true) {
    //get input
    const password = prompt("Enter password: ")
    if (checkGuess(password)) {
        break;
    }
    counter++
}


/*THE JAVASCRIPT SHELL

Enter password: allan
Wrong Password. Try Again!!🏴‍☠️
Enter password: kariuki
Wrong Password. Try Again!!🏴‍☠️
Enter password: matunda99
Access Granted🎉

Shell>>
*/