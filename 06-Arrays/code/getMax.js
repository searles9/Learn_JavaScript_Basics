// get max

const numbers = [1,2,3,4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((a, b) => (a > b) ? a : b);
}