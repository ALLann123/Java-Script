//Objects - Have properties associated with values. They are similar to python dictionaries
//E.G: JSON

const obj = {
    name: 'Alice',
    age: 23,
    sayHello: function() {
        return "hello"
    }
}

//get all values inthe object
console.log("Values: ", Object.values(obj))

/*
//get the keys of the object
console.log("Keys: ", Object.keys(obj))
*/

//We use 'of' when looping through an array while in
//objects we use in to loop through the keys

for (let key in Object.keys(obj)) {
    console.log(key)
}