const course = {
    name: 'Javascript',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split(' is '); // Corrected `part` to `parts`
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// Access the getter
console.log(course.details); // Output: "Javascript is 3 hours"

// Use the setter
//course.details = "Python is 4 hours";

// Access the getter again to see the updated values
//console.log(course.details); // Output: "Python is 4 hours"
