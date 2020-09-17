const strings = ['potato', 'carrot', 'beetroot']

function split(string) {
  return string.split('')
}

function reverse(array) {
  return array.reverse()
}

function join(array) {
  return array.join('')
}

const reversed =
  strings
    .map(split)
    .map(reverse)
    .map(join)

console.log(reversed)
