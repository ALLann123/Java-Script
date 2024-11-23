const numbers=[1,2,3,4,5,6];
//use the reduce function to get the sum of the array elements

const sum_array=numbers.reduce((accumilator, current_value)=>accumilator+current_value);
console.log(`The sum: ${sum_array}`)