// Prime Numbers

// Prime - cant be divided evenly 
// Composite - can be divided evenly 

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; i++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
          return false;
    return true;
}