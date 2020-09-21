// Is one of these numbers negative?

const numbers = [7, 1, 5, 2, -9, 5, 1, 9, 5, 1]
let hasNegative = false
for (let i=0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    hasNegative = true
    break
  }
}

console.log(hasNegative)
