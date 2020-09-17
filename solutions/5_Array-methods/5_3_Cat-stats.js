const cats = require('../../data/cats.json')

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
const catCount = cats.length

const paprikaAge = cats.find(cat => cat.name === 'Paprika').age

const meanAge = calculateMean(cats.map(cat => cat.age))

const longestName = sortStringsByLength(cats.map(cat => cat.name))[0]

const manxCount = cats.filter(cat => cat.breed === 'Manx').length

const birmanPercentage = cats.filter(cat => cat.breed === 'Birman').length / catCount * 100

// cats.flatMap(cat => cat.favoriteToys) is the same as cats.map(cat => cat.favoriteToys).flat()
const availableToys =
  getUnique(cats.flatMap(cat => cat.favoriteToys))
    .join(', ')

const catnipLikeCount =
  cats
    .map(cat => cat.favoriteToys)
    .filter(toys => toys.includes('catnip'))
    .length

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
