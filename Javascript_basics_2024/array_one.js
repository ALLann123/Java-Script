const numbers=[5,4,3,2,1];
//add value to the end e use the .push() method
//numbers.push(0,7,8,9)
//console.log(numbers)

//to add values to the front of array use the unshift() method
numbers.unshift(10,11,12,13)
console.log(numbers)

//add value inthe middle using splice
numbers.splice(2,0, 89,98,33)
console.log(numbers)