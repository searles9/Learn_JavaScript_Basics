# Arrays
***
***
# Adding elements
* even if its a constant you can add and remove elements - you can modify the contents
* arrays start with 0
```
const numbers = [3, 4];

// add to end
numbers.push(7,9);

// add to beginning
numbers.unshift(1,2);

// add to middle - numbers.splice(startIndex, numbers to delete)
numbers.splice(2, 0, "a", "b")
// a and b are placed after 1 and 2
```

# Find elements (primative)
* the type of the passed in value matters 
```
const numbers = [1,2,3,4]

// Finds the inf
numbers.indexOf("a");  // result is -1 because the element is not in the array 

numbers.indexOf(1);   // result is 0 because that is the infex of 1 

numbers.indexOf(1) !== -1;

//better option:
numbers.includes(1);

// choose at what index to start the search (item to search, index to start)
numbers.indexOf(1, 3)
```

***
***
# Finding elements (refrence types ...objects) 

```
const courses = [
    {id: 1, name: "a"},
    {id: 2, name: "b"},
]

const course = courses.find(function(course) {
    return course.name === "a";
});


console.log(course)
```

***
***
# Arrow Functions
* same as above but instead of using the function key word you use =>
* if you have no paramaters you use an empty ()
```
const courses = [
    {id: 1, name: "a"},
    {id: 2, name: "b"},
]

const course = courses.find(course => {
    return course.name === "a";
});


console.log(course)
```
* you can also make it a one liner:
```
const course = courses.find(course => course.name === "a");
// find course with a name equal to a 
```

***
***
# Remove elements from an array 

```
const numbers = [1,2,3,4]


// End 
numbers.pop();

// Beginning - returns the element that is removed
const first = numbers.shift();

// Middle (index of where you want to remove, number of elements that you want to remove)
numbers.splice(2, 1);
```

***
***
# Emptying an Array

```
let numbers = [1,2,3,4];

// Solution 1 - reassign the var to an empty array
// This only works if you dont have other refrences pointing to the var
numbers = [];

// Solution 2 - remove elements by setting the lenght 
numbers.length = 0;

// Solution 3 - splice
numbers.splice(0, numbers.length);

// solution 4 - pop
while (numbers.length > 0)
numbers.pop();
```


***
***
# Combining and Slicing Arrays
* slice an array into two parts
```
const first = [1, 2, 3];
const second = [3, 4, 5];

const combined = first.concat(second);

const slice = combined.slice(2,4); // start at index 2 then go to 4
```
* if you have objects in the array, the refrences to those values are copied
    * so if you change the object value it will change the value in the new slice array 

***
***
# The Spread Operator 
* the spread operator in ES6 can also combine 2 arrays 
```
const first = [1, 2, 3];
const second = [3, 4, 5];

const combined = [...first, ...second];

const slice = combined.slice(2,4); // start at index 2 then go to 4
```