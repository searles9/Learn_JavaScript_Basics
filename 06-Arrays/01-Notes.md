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

***
***
# Iterating over an array
* you can use forEach method
* there are many ways to iterate an array 
* you dont get the index with the for of loop
* you can use the for in loop to get the index tho
```
const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

numbers.forEach(function(number) {
  console.log(number);
});

// function syntax
numbers.forEach(number => console.log(number));

// with a second paramater
numbers.forEach((number, index) => console.log(number, index));
```

***
***
# Joining arrays
* when you are looking at documentation a "?" usually means the paramater is optional 

```
const numbers = [1, 2, 3];

const joined = numbers.join(',');
console.log(joined);
```
* split something:
```
const message = 'this is my first message';
const parts = message.split(' ');
console.log(parts);
```

***
***
# Sorting Arrays
* there are build in sorting methods
```
const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers);

//reverse order
numbers.reverse();
```
* when you have objects and such its harder to sort
* sort is used for comparison
```
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
]

courses.sort(function(a, b) {

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA< nameB) return 1;
    return 0;
})
```

***
***
# Testing the elements of an array
* every - checks all
* some - checks for one 
* these are new methods  

```
const numbers = [1, 2, 3]

// checks all the values in the array
// once it finds the odd number it stops
const allPositive = numbers.every(function(value) {
  return value >= 0;
});

// checks if some of the numbers are positive
const atleastOnePosistive = numbers.some(function(value) {
  return value >= 0;
});
```

***
***
# Filtering an array

```
const numbers = [1, 2, 3, -4, 5]

// filter to the positives only
const filtered = numbers.filter(function(value) {
    return value >= 0;
});

// arrow function version
const filtered = numbers.filter(value => return value >= 0);

// arrow function version again
const filtered = numbers.filter(n => n >= 0);
```

***
***
# Mapping an array
* map number to string
```
const numbers = [1, 2, 3, -4, 5]
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '<li>');

const html = '<ul>' + items.join('') '</ul>';
console.log(html);

```
* map number to object
```
const numbers = [1, 2, 3, -4, 5]
const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => ({ value: n}) );

console.log(items);

```
* you could also chain them but meh:
```
const numbers = [1, 2, 3, -4, 5]
const items = numbers
                    .filter(n => n >= 0)
                    .map(n => ({ value: n}) );

console.log(items);

```