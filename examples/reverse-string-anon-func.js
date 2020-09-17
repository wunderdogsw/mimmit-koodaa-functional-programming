const strings = ['potato', 'carrot', 'beetroot']

const reversed =
  strings
    .map(string => string.split(''))
    .map(array => array.reverse())
    .map(array => array.join(''))

console.log(reversed)
