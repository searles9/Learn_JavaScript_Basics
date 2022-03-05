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
* 