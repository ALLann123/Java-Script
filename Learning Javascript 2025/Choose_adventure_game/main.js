//create our keyboard input
const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "welcome to our game!")


const shoulWePlay = prompt('Do you want to play?').toLowerCase()

if (shoulWePlay === "yes" || shoulWePlay === 'y') {
    console.log("Okay we will play")
        //Game logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ").toLowerCase()
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge....")
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
        if (cross === "yes" || cross === 'y') {
            console.log("You cross but the bridge was weak and broke and you fell. You Lost!!")
        } else {
            console.log("Good Choice..You Win!!")
        }
    } else {
        console.log("You go right and fall off a cliff")
    }
} else if (shoulWePlay === "no" || shoulWePlay === 'n') {
    console.log("Okay :(")
} else {
    console.log("Invalid input....")
}