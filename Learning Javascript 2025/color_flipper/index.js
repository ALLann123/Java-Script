//set up some events that does something on the JS then modifies the code
const body = document.getElementsByTagName("body")[0] //specify the exact htlag you are targeting using indexes

//Function- Block of code containing reusable code
function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    //generates a random value between 0-1
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color;
}