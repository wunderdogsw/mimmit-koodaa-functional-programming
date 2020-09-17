const arr = ['apple', 'banana', 'mango', 'pear', 'pineapple']

// Map applies given function to each item in array
const mapped = arr.map(str => str.toUpperCase())
console.log(mapped)

// Filter returns only item that satisfy a givne condition,
// i.e. only items for which the given function returns a truthy value.
const filtered = arr.filter(str => str.startsWith('p'))
console.log(filtered)

// Find returns the first item that satisfies a given condition,
// i.e. the first item for which the given function returns a truthy value.
const found = arr.find(str => str.startsWith('p'))
console.log(found)

// Some returns true if at least one item satisfies a given condition (tested like above).
const some = arr.some(str => str.length === 5)
console.log(some)

// Flat takes an array of arrays and flattens its values into a one-dimensional array

const arrayOfArrays = [
  ['apple', 'pear'],
  ['orange', 'banana', 'mango'],
  [],
  ['pineapple']
]
const flattened = arrayOfArrays.flat()
console.log(flattened)

// FlatMap is like map followed by flat
const flatMapped = arr.flatMap(str => str.split(''))
console.log(flatMapped)

// Reduce executes the given function on each element of the array and accumulates the result in a single value.
const reduced = arr.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue)
console.log(reduced)
