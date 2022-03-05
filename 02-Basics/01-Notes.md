# Basics
***
***
# Variables
* code: [Variables](./code/variables)
* ```var``` works but can be bad ... use ```let``` to declare a variable
* variables cannot be reserved keyworks
* vars cant contain hyphens "-"
* variables should be camelCase
* variables are case sensitive
* you can declare multiple variables on one line:
```
// one is is undefined
let firstName = "Donovan', lastName;
```
* its best to declare variables on seperate lines tho
* "let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope."

***
***
# Constants
* code: [Constants](./code/constants)
* use ```const``` for constant variables

***
***
# Primitive types
* there are primitive types and refrence types
* strings
```
let name = "Donovan";  // string literal
```
* numbers
  * all numbers are numbers ... meaning that a float is still called a number
```
let age = 30;  // number literal
```
* boolean
```
let isApproved = true;  // boolean literal (true or false)
```
* undefined
    * not declared
```
let name;

// or 

let firstName = undefined;
```
* null
  * you may want to use null to clear the value of a variable
```
let lastName = null;
let selectedColor = null;
```

***
***
# Dynamic typing
* there are statically typed and dynamically typed languages
* statically typed: when a var is set the type cannot later be changed
* dynamically typed: the type of a variable can change at runtime
```
let name = "Donovan";
typeof name //string

name = 1;
typeof name //number

let firstName = undefined;
typeof firstName  // undefined

let lastName = null;
typeof lastName // type is object
```

***
***
# Objects
* its basically the JS version of a python dictionary, with a little extra functionality 
* refrence types
  *  object
  *  array
  *  function
* objects are defined in ```{}``` braces
```
let person = {
    name: "Donovan",
    age: 21,
};

console.log person

// access the properties using dot notation:
person.name = "John"
console.log(person.name)

// access the properties using bracket notation
person["name"] = "Mary";

```
* dot notation is usually most common and concise
* but for example if wanted a user to select an attribute and it changes you could use brakcet notation
```
let selection = 'name'
person[selection] = 'Mary'
```

***
***
# Arrays
* a list
```
// let selectedColors = [];

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

// display first element
console.log(selectedColors[0]);

// add a new element
selectedColors[2] = 'green';

typeof selectedColors // object

// check the lenght
console.log(selectedColors.length);
```

* each element has an index 0 to x
* an array is an object in JS 

***
***
# Functions