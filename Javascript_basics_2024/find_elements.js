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
const find_emp=employees.find(function(e){
    return e.name === 'Mark'
});

console.log(find_emp)