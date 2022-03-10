// Count Truthy 

// returns the number of truthy elements in the array (truthy not just true)

const array = [0, 1, 2, 3]

function countTruthy(array) {
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
}