# Operators
***
***
# JS Operators
* with operators you can make expressions 
* types of operators:
  * arithmetic
  * assignment
  * comparison
  * logical
  * bitwise

***
***
# Arithmetic Operators
* ```+```
* ```-```
* ```*```
* ```/```
* ```%``` mod
* ```**``` power 
* ```++``` incrament
  * ```console.log(++x)``` incraments then shows the val
  * ```console.log(x++)``` shows the current value then incraments
* ```--``` decrament 
  * works the same way as incrament - just lowering the val

***
***
# Assignment Operators
* ```+=```
* ```*=```
* etc...

***
***
# Comparison Operators
* ```>```
* ```<```
* ```<=```
* ```>=```
* these return booleans - true or f
* ```===``` equal to 
* ```!==``` not equal to 

***
***
# Equality Operators
* ```===``` strict equality operator
  * ensures that both values have the same type
  * ```1 === 1``` true
  * ```"1" === 1``` false
* ```==``` loose equality operator
  * both values dont need to be the same type
  * ```1 === 1``` true
  * ```"1" === 1``` true
  * ```true === 1``` this is true because it converts the val on the rightside to a boolean
  * loose equality operators convert the value on the right side to match the value type on the left side
* you want to use the strict equality operator most of the time

***
***
# Teranary Operators

```
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
```
* if this is true ? do this : else do this

***
***
# Logical Operators
* ```&&``` and
  * returns true if both operands are true
  * ```console.log(true && true)``` ... true
  * ```console.log(true && false)``` ... false
```
let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);
```
* ```||``` or 
  * returns true if either one is true
  * as soon as it finds a truthy operand it returns that value - this is called short circuting
  * ```false || 1 || 2``` returns 1
* ```!``` not
  * if eligibleForLoan is true the not operator will convert applicationRefused to false
```
let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible', eligibleForLoan)

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);
```

***
***
# Logical Operators with Non-Booleans
* ```false || true``` ... is true
* ```false || "Donovan"``` ... returns Donovan
* Falsy types
  * undefined
  * null
  * 0
  * false
  * ""
  * NaN (not a number)
* anything that is not falsy is truthy ... which is why this returns Donovan: ```false || "Donovan"```
```
let userColor = "red";
let defaultColor = "blue";

let currentColor = userColor || defaultColor;

console.log(currentColor);
```
* This will use the default color if userColor is not set

***
***
# BitWise Operators
* ```|``` represents a bitwise or (logical ors have a double ||)
* bitwise operators operate on the individual binary bits
* ```&``` bitwise and
* "Bitwise operators in Javascript are mostly used for numerical conversions/computations, because sometimes they're much faster than their Math or parseInt equivalents."

***
***
# Operators Precedence 
* its best to use parentheses 

***
***
