//import the prompt to get keyboard input
const prompt = require('prompt-sync')()


//lets import filesystem
const fs = require('fs') //allows us to load files into our program

//function Reads our files
function loadQuestions() {
    try { // the fs library is responsible for loading files in our program
        const data = fs.readFileSync("questions.json", "utf8")
            //When file is loaded contents become a string, we use JSON.parse to convert the file contents to a JS object
        const questions = JSON.parse(data).questions
        return questions
    } catch (e) { //block executes if any error occurs preventing our program from failing
        console.log("Error Occure loading file", e)
    }
}


function getRandomQuestions(questions, numQuestions) {
    if (numQuestions > questions.length) {
        numQuestions = questions.length
    }
    const shuffled = questions.sort(() => {
        return 0.5 - Math.random()
    })
    return shuffled.slice(0, numQuestions)
}


function askQuestion(question) {
    console.log(question.question)
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i]
        console.log(`${i+1}.${option}`)
    }

    const choice = parseInt(prompt("Enter the Number: "))
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid Correct choice")
        return false
    }
    const choiceValue = question.options[choice - 1]
    return choiceValue === question.answer
}

const numQuestions = parseInt(prompt("Enter the number of questions: "))
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, numQuestions)

let correct = 0;

//get the current time they start
const startTime = Date.now()

for (let question of randomQuestions) {
    const isCorrect = askQuestion(question)
    console.log()
    if (isCorrect) correct++
}

const totalTime = Date.now() - startTime

console.log("Correct: ", correct)
console.log('Time: ', Math.round(totalTime / 1000) + "s")
console.log('Score: ', Math.round(correct / numQuestions * 100) + "%")