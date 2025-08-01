//Arrays: Essentially a way to store multiple elements of the same type under the same name

//create an array
const arr = [1, 2, 3, true]

//create an array with a dynamic size
const arr2 = new Array(5)


//Try Example
console.log("Shopping List Manager")

//create array and add products
const items = ['milk', 'bread', 'eggs']

//display
console.log("Array before alteration", items)

//add butter to the array
items.push('butter')
console.log("Added product: ", items)

//remove bread from array
items.splice(1, 1)
console.log("Removed item", items)

//Add cheese at the begining of the array
items.unshift('cheese')
console.log("Added element at the begining", items)