// FizzBuzz


// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// If its not divisible by either you get the same number => input
// If you pass in another value that is not a number you get "not a number"


const output = fizzBuzz(3);
console.log(output); 

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;  // Not a number
        
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';


    return input;
}

