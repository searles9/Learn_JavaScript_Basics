// count occurences

const numbers = [1,2,3, 1, 4];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurence;
    }, 0);
}