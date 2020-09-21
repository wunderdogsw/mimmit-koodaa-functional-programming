// Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Add 1 to all of the given numbers
const numbers = [1, 4, 5, -1, 3, 9, -3, 2]

// With a named function
function addOne(number) {
  return number + 1
}
const newNumbers = numbers.map(addOne)
console.log(newNumbers)

// With an anonymous function
const newNumbersAnonFunc = numbers.map(number => number + 1)
console.log(newNumbersAnonFunc)
