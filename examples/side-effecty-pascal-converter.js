function oneWordToPascalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

function convertToPascalCase(words, pascalString) {
  if (words.length === 0) {
    return pascalString
  } else {
    // Pop removed the last item from the words array so now 'words' is shorter.
    // This is a side effect, one that could easily lead to annoying bugs.
    const lastWord = words.pop()
    // Here, the words array is one item shorter than before the pop operation.
    return convertToPascalCase(words, oneWordToPascalCase(lastWord) + pascalString)
  }
}

// I've got five fruits here
const myWords = ['apple', 'banana', 'mango', 'pear', 'pineapple']
console.log(myWords)

// Then, I print out my fruit names in Pascal case
const myWordsInPascalCase = convertToPascalCase(myWords, '')
console.log(myWordsInPascalCase)

// Oh no, all my words are now gone :(
console.log(myWords)
