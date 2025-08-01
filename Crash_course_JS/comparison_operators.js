/*
==  Loose equality operator
=== Use this one. Use strict inequality
!=
!== and also use this one. Not strict inequality
<
>
>=
<=
*/

//We also have
/*
&& AND - Both conditions have to be true
|| OR  - One Condition has to be true
! NOT  - Flips to the opposite of the condition
*/

//----1. Example with AND

function secure_shell(username, password) {
    console.log("trying........")
    if (username === 'kali' && password === 'root') {
        console.log()
        console.log(`Welcome ${username}`)
        console.log("Shell>> ")
    } else {
        console.log()
        console.error('Failed!!')
    }
}

//create prompt
const prompt = require('prompt-sync')()

const username = prompt("USERNAME: ")
const password = prompt("password: ")

secure_shell(username, password)