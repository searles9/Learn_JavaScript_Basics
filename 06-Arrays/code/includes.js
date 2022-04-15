// includes

const numbers = [1 , 2, 3, 4];

// the build in method -> console.log(numbers.includes(1));


// custom method
function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
     return true;
    return false;
}

console.log(includes(numbers, 1))