# Control Flow
***
***
# If...else
* code: [Code](./code/if%20else/)
* JS has 2 type of conditional statements
  * if and else
  * and... switch and case
```
if (condition) {
    statement;
}
else if (another condition) {
    statement;
}
else if (another condition) {
    statement;
}
else
    statement
```
* if you only have one statement line
```
if (condition) 
    statement
```

***
***
# Switch and Case
* [Code](./code/switch%20case/)
* add a break statement - other wise the other statements will be executed
* the default statement will run if no cases match
* used to compare a value of a variable against case statements
```
switch (variable) {
    case 'condition to match':
        statement to run;
        break;
    
    case 'condition to match':
        statement to run;
        break;

    default:
        statement;
}
```

***
***
# For
* syntax:
```
for (initalExpression; condition, incramentExpression) {
    statement
}
```
* it will execite as long as the condition is true
* ex: 
```
for (let i = 0; i < 5; i++) {
    console.log('Hello World')
}
```
* ex 2: 
```
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}
```
***
***
# While
* you have to declare the variable first
```
let i = 0;

while (condition) {
 statement   
}
```
* ex:
```
let i = 0;

while (i <= 5) {
   if (i % 2 !== 0) console.log(i);
   i++;
}
```

***
***
# Do...while
* do while loops are always executed atleast once - even if the condition is false
* you probably wont use this much. You will use for and while loops more 
```
let i = 0;

do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

```

***
***
# Infinite loops 
* dont make infinite loops

***
***
# For ... in
* used to iterate over the properties of an OBJECT
* ex 1:
```
const person = {
    name: "Donovan",
    age: 21
}

for (let key in person)
    console.log(key, person[key])   // key value
```
* ex 2: 
* this will print the index of each item
```
const colors = {'red', 'blue', 'green'};

for (let index in colors)
    console.log(index)

// this prints the element
for (let index in colors)
    console.log(index, colors[index]);
```

***
***
# For ... of 
* new way to iterate over ARRAYS
```
for (let color of colors)
    console.log(color);
```

***
***
# Break and Continue
* break
```
let i = 0;

while (i <= 10>) {
    if (i === 5) break;

    console.log(i);
    i++;
}
```
* continue:
* if it sees the continue keywork it will skip the rest of the loop and start a new iteration
* you wont use it too much - not great for code
```
let i = 0;

while (i <= 10>) {
    if (i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}
```

***
***