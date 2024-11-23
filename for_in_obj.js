const student={
    name:"Allan",
    course:"BSc.Computer Science",
    Year:2,
    specializing:"Security"
};
//use a for loop to iterate through the object
for(const stud in student){
    console.log(student[stud])
}