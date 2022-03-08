// Write a function that takes two numbers and returns the maximum of two

console.log(max_of_two(1,2))
console.log(max_of_two_2(1,2))

function max_of_two(num1, num2) {
    if (num1 > num2) return num1;
    return num2;
}

function max_of_two_2 (num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
