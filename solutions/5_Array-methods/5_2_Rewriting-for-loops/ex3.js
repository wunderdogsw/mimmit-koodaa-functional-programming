// Is one of these numbers negative?

const numbers = [7, 1, 5, 2, -9, 5, 1, 9, 5, 1]
const hasNegative = numbers.some((number) => number < 0)
console.log(hasNegative)
