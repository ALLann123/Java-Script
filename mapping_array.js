const numbers=[2,3,4,5,6];
//use map method to square all the elements of the array
const squared_array=numbers.map(nums=>nums*nums);
console.log(squared_array)
//lets use strings now
//convert strings to uppercase
const letters=['a','b','c','d','e'];
const capital_array=letters.map(letter=>letter.toUpperCase())
console.log(capital_array)

//now working with objects
const employee=[
    {id:1,name:'Allan',email:'Karisallan@Gmail.com'},
    {id:2,name:'Alvin',email:'alvin@Gmail.com'},
    {id:3,name:'Mercy',email:'MERCY254@Gmail.com'},
    {id:4,name:'Robbot',email:'roBoT@Gmail.com'}
]
const updatedEmeployee=employee.map(emp=>({
    ...emp,
    email: emp.email.toLowerCase()
}))
console.log(updatedEmeployee)