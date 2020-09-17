const cats = require('../data/cats.json')

// Helper functions
function calculateMean(numbers) {
  const n = numbers.length
  const sum = numbers.reduce((a, b) => a + b, 0)
  return sum / n
}

function sortStringsByLength(strings) {
  return strings.sort((a, b) => b.length - a.length)
}

function getUnique(array) {
  return array.filter((entry, index) => array.indexOf(entry) === index)
}

// Statistics
const catCount = ''
const paprikaAge = ''
const meanAge = ''
const longestName = ''
const manxCount = ''
const birmanPercentage = ''
const availableToys = ''
const catnipLikeCount = ''

const result = `
  There are ${catCount} cats.
  Paprika is ${paprikaAge} years old.
  The mean age of cats is ${meanAge}.
  The cat with the longest name is ${longestName}.
  ${manxCount} cats are Manx. 
  ${birmanPercentage}% of cats are Birman.
  Possible toys are: ${availableToys}.
  ${catnipLikeCount} cats like catnip.
`

console.log(result)
