// Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Add 1 to all of the given numbers
const numbers = [1, 4, 5, -1, 3, 9, -3, 2]
const newNumbers = []
for (let i = 0; i < numbers.length; i++) {
  newNumbers[i] = numbers[i] + 1
}
console.log(newNumbers)
