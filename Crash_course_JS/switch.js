//Alternative use than multiple if statements

//Lets check some linux commands

const prompt = require('prompt-sync')()

const commandUser = prompt('Enter linux command>> ')

console.log("Checking command... ")

switch (commandUser) {
    case 'ls':
        console.log("[+]List directories")
        break;
    case 'cd':
        console.log("[+]Changing directory")
        break;
    case 'pwd':
        console.log("[+]Check current working directory")
        break;
    case 'ifconfig':
        console.log("[+]Checking the network settings")
        break;
    case 'touch':
        console.log("[+]Creates an empty file")
        break;
    case 'cat':
        console.log("[+]Displaying file contents")
        break;
    default:
        console.log("Unrecognized command!!")
        break;
}