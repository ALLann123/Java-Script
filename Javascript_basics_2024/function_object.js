function get_dog(name,breed,age){
    return {
        name,
        breed,
        age,
        eat:function(){
            console.log("Eats Meat");
        },
        bark(){
            console.log("Wooof")
        }
    }
}

const dog_one = get_dog('Tommy','Kenyan',6);
console.log(dog_one)
