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