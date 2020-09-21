// Get all positive numbers from this list (including 0)
const numbers = [8, 9, 10, 2, 3, -6, -4, -9, -3, -1, 0, 7]

const positiveNumbers = []
for (let i=0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    positiveNumbers.push(numbers[i])
  }
}

console.log(positiveNumbers)
