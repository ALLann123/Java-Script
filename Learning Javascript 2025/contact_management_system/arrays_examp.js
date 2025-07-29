const arr = [1, 2, 3, 4, 5]

arr[0] = 9

console.log(arr)

//print arry at index one
console.log(arr[1])

//get the length on an array
console.log("The Array Length: ", arr.length)


//adding more values to the array
arr.push(10)


console.log("New Array: ", arr)

//removing values from an array. Removes the last element
arr.pop()
console.log("Deleted a value inthe array: ", arr)

//remove an array element by index
arr.splice(2, 1)
console.log(arr)

const fruits = ['apple', 'banana', 'mango']
    //for Loops

/*
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} */
for (let fruit of fruits) {
    console.log(fruit)
}