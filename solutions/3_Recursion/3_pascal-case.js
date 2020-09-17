function oneWordToPascalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

function convertToPascalCase(words, pascalString) {
  if (words.length === 0) {
    return pascalString
  } else {
    const lastWord = words[words.length - 1]
    const otherWords = words.slice(0, words.length - 1)
    return convertToPascalCase(otherWords, oneWordToPascalCase(lastWord) + pascalString)
  }
}

const myWords = ['apple', 'banana', 'mango', 'pear', 'pineapple']
const myWordsInPascalCase = convertToPascalCase(myWords, '')
console.log(myWordsInPascalCase)
