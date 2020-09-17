// Sum only positive numbers
const numbers = [1, -8, -1, 3, 5, -6, -9, -9, 3, -6, -2, -9]

let sum = 0
for (let i=0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sum = sum + numbers[i]
  }
}

console.log(sum)
