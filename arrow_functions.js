//lets create an array of objects
const employees=[
    {
        name:'Allan',
        ID:1
    },
    {
        name:'Mark',
        ID:2
    }
]
//we use the find method in array of objects
const find_emp=employees.find((e)=>e.name === 'Mark'); //this demonstrates the use of arrow functions to simplify writing the function

console.log(find_emp)