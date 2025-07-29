/*let i = 0;

while (i < 10) {
    i++
    if (i === 5) continue
    console.log(i)
}

*/
let x = 15;

while (x > 5) {
    console.log(x)
    x--
    if (x === 8) {
        console.log("Gotten the magic Number: ", x)
        break
    }
}