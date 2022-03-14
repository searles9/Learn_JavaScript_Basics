# Objects
***
***
# Basics
* key value pairs
* objects are used to group related variables

```
const circle = {
  radius: 1,
  location: {
      x: 1,
      y: 1
  }
  isVisible: true,
  draw: function() {
      console.log('draw');
  }
};

circle.draw(); // Method
```

***
***
# Factory Functions
* Factory functions produce objects
* if the key and value are the same you can just specify the key
  * ex: radius: radius ... -> radius, 
* for the function instead of doing the key value you can do ...
  * function_name () {}
* use camel notation for naming

```
function createCircle(radius) {
  return {
    radius,
    draw() {
        console.log('draw');
    }
  };
}

const circle1 = createCircle(1)
console.log(circle1);

const circle2 = createCircle(6)
console.log(circle2);
```

***
***
# Constructor Functions
* it creates an object
* the naming convention is different than factory functions
* contructor functions use pascel notation: OneTwoThreeFour
* "this" is a refrence to the object that is creating the piece of code
* the new keyword creates an empty object - then the "this" keywords 
```
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(1);
```

***
***
# Dynamic Nature of Objects
* once you create an object you can always add new methods or properties - they are dynamic
* you can also remove existing properties 

* ex add:
```
const circle = {
    radius: 1
}

circle.color = "yellow";
circle.draw = function() {}

console.log(circle);
```

* ex delete: 
```
delete circle.color;
delete circle.draw;
```

* notice how "const" is used. You can change the calues you just cant reassign the variable to something else ... meaning you couldnt reassign it like this ```circle = {};```

***
***
# Constructor property
* all objects have a constructor property
```
circle = {};

circle.constructor
```
* the constructor property refrences the function that was used to create the object

***
***
# Objects are functions
* functions are objects
```
circle.name
circle.lenght
```

***
***
# Value vs refrence types 
* there are value types and refrence types
* value types (primatives)
  * number
  * string
  * boolean
  * symbol
  * undefined
  * null
* refrence types
  * object
  * function 
  * array

* refrence types are independant
* objects are copied by thier refrence
  * so if you assign x to y it is going to point directly at x in memory ... so when you update x it updates y

***
***
# Enumerating properties of an object
* iterate over object keys
```
for (let key in cirlce)
console.log(key, circle[key]);
```
```
for (let key of Object.keys(cirlce))
console.log(key);
```
* this returns each key value pair as an array
```
for (let entry of Object.entries(cirlce))
console.log(entry);
```
* check for a key:
```
if ('radius' in circle) console.log('yes');
```

***
***
# Cloning an object
* this is an old approach
```
const circle = {
  radius: 1,
  draw() {
    console.log('Draw');
  }
};

const another = {};

for (let key in circle)
  another[key] = circle[key];
```

* better - clone the circle object:
```
const another = Object.assign({}, circle)
```
* clone it and add a new property
```
const another = Object.assign({
  color: "yellow"
}, circle)
```

* even better: 
* it takes all the properties and puts them in the new one
```

const another = {... circle };
```

***
***
# Grabage collection
* you dont have to deallocate memory when making objects - it uses a garbage collector
* you cant tell it to run
* it cleans up old variables

***
***
# Math - build in object
* there are docs on it
```
math.random()
Math.max(1,2,3)
```

***
***
# String

```
// String primative (type is string)
const message = "hi";

//string object (type object)
String("hi");
const another = new String("hi")


message.length
message[0]  // get a character at an index
message.includes("h") // check if it includes a word or character
message.startsWith("This"); //case sensitive
message.endsWith('e')
message.indexOf("of")  // check the index for where a match starts
message.replace("first", "second") // this creates a new string - doesnt modify the original
message.trim() // remove white space
message.trimLeft() // remove white space from the left
```

* there is escape notation similar to python ... like \n for new line ...or something like a backslash to escape something 

***
***
# Template literals
* rather than using new line characters, etc.. you can use template literals
* new in ES6
* notice how you dont have to add a new line - it just recognizes that you are on a new line
```
const another = `This is my 
  first message`;

// with a placeholder - for var or expressions
const name = 'Don'

const message = 
`Hi ${name},
 
 How are you`;
```
* you also dont need to escape quotes with this method

***
***
# Date
* there are docs on this
* the dates are 0 based ... january is 0
```
// create date object
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);

now.getDate...
now.setFullyYear(2017);
now.toDateString();
now.toTimeString();
now.toISOString();
```

***
***
# Practice
* [](./code/)