//Let-allows us to change the value later inthe program

let secondsElapsed = 0
let interval = null;

//this is okay to be a constant as it doesnt change but whats inside it is what we change
const time = document.getElementById('time')

//this function is responsible for adding the leading '0' when its counting instead of making it blank
function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    //trancate the nearest whole number
    const minutes = Math.floor(secondsElapsed / 60)
        //now we get the remainder using modulus
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++
    setTime()
}

function startClock() {
    //if the clock was counting now we click the start again. 
    //if (interval) resetClock()
    if (interval) stopClock()
    interval = setInterval(timer, 1000)

}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0
    setTime()
}