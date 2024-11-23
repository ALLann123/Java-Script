const employee=[
    {name:'Allan', ID:1, role:'Security Engineer'},
    {name:'John', ID:2, role:'developer'},
    {name:'Martha', ID:3, role:'IT'},
    {name:'Mark', ID:4, role:'Network Engineer'},
    {name:'Ian', ID:5, role:'developer'}
]
const developer=employee.filter(emp=>emp.role ==='developer')
console.log(developer)