function grade(marks){
    if(marks>=80 && marks<=100){
        console.log("A")
    }else if(marks>=70){
        console.log("B")
    }else if(marks>=60){
        console.log("C")
    }else if(marks>=50){
        console.log("D")
    }else if(marks<50){
        console.log("Failed!!")
    }else{
        console.log("Invalid Input!!")
    }
}
//call the function to be executed
grade(89)
grade(59)
grade(34)
