//we do this first to get keyboard input
const prompt = require("prompt-sync")()
const name = prompt("What is your name: ")
console.log("Hello", name, ",how are you?")