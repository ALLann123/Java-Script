//function to check divisibilty of number by 3-fizz and 5-buzz and both FizzBuzz

function divisibilty(num){
    if(num%3===0 && num%5===0){
        console.log("FizzBuzz")
    }else if(num%3===0){
        console.log("Fizz")
    }else if(num%5===0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
}

for(let i=1;i<=20;i++){
    divisibilty(i)
}