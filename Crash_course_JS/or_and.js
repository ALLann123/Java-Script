//Build a Login system that accepts:username=“root” or my email root@kali.com to login.

function login(user, password) {
    console.log()
    if (user === 'root' || user === 'root@kali.com') {
        if (password === 'hackers') {
            console.log("WELCOME ADMIN>> ")
        } else {
            console.log("Wrong Password!!")
        }
    } else {

        console.log("USER DOES NOT EXIST!!")
    }
}


const prompt = require('prompt-sync')()

const user = prompt('Username/Email: ')
const password = prompt('password: ')

login(user, password)