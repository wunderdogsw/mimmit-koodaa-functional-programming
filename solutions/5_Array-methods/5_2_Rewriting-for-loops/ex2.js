// Get all positive numbers from this list (including 0)
const numbers = [8, 9, 10, 2, 3, -6, -4, -9, -3, -1, 0, 7]

// Here, using only an anonymous function but you can also use a named one
const positiveNumbers = numbers.filter((number) => number >= 0)
console.log(positiveNumbers)
