# Functions
***
***
# Function declarations vs Expressions
* this is a function declaration
* you can call this function before it is defined
```
function walk() {
    console.log('walk');
}
```
* this ia a function expression
* you have to define this before it can be run
```
let run =  function() {};
```
* in js - functions are objects
* this is a named function expression
```
let run =  function walk() {
    console.log('run');
};

let move = run;

run();
move();
```

***
***
# Hoisting
* with function expressions you have to define the function first before you can call it 
* moving it to the top is called hoisting

***
***
# Arguments
* if you dont specify an argument you will get undefined
```
function sum(a, b) {
    return a + b;
}

let theSum = sum(1)
```
* every js function has an object called ```arguments```
* get the sum of all passed in arguments
```
function sum() {
    let total = 0;
    for (let value of arguments)
      total += value 
    return total 
}

let theSum = sum(1,2,3,45,5,4,3)
```

***
***
# The rest operator
* if you want to have a function with varying number of paramaters you can use the rest operator
* the rest operator is the ```...args``` part
* the args are put in an array - so its a bit more useful than the 
```
function sum(...args) {
    let total = 0;
    for (let value of arguments)
      total += value 
    return total 
}

let theSum = sum(1,2,3,45,5,4,3)
```
* another option:
```
function sum(...args) {
    return args.reduce((a,b) => a + b);
}

let theSum = sum(1,2,3,45,5,4,3)
```
* the rest paramater must be the last paramater  - but you can have paramas before it 

***
***
# Default paramaters
* older way 
```
function intrest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}
```
* new way in es6
```
function intrest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
```

***
***
# Getters and Setters
* a special method in objects
* kinda bad:
```
const person = {
    firstName: 'Donovan',
    lastName: 'Searles'
};

console.log(`${person.firstName} ${person.lastName}`)
```
* better option:
```
const person = {
    firstName: 'Donovan',
    lastName: 'Searles'
    fullName() {
        return `${person.firstName} ${person.lastName}`
    }
};

console.log(person.fullName());
```
* this doesnt allow you to set the persons name from the outside tho
* this is why you use getters and setters:
* getters - used to access properties
* * setters - used to change or mutate them 
```
const person = {
    firstName: 'Donovan',
    lastName: 'Searles'
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Donovan Searles';

console.log(person);
```

***
***
# Try and Catch
* 