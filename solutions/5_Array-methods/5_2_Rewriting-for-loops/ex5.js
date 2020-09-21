// Sum only positive numbers
const numbers = [1, -8, -1, 3, 5, -6, -9, -9, 3, -6, -2, -9]

// Solution, named functions
function isPositive(number) {
  return number > 0
}

function addTwo(a, b) {
  return a + b
}

const sumNamed = numbers.filter(isPositive).reduce(addTwo)
console.log(sumNamed)

// Solution, anonymous functions
const sumFunctional =
  numbers
    .filter((number) => number > 0)
    .reduce((accumulator, number) => accumulator + number)
console.log(sumFunctional)
