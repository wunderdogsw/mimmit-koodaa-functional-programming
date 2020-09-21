function numberConverter(converterFunction, number) {
  const converted = converterFunction(number)
  console.log(converted)
}

// Some example functions
function toPowerOfTwo(number) {
  return number * number
}

function minusTen(number) {
  return number - 10
}

function numberInString(number) {
  return `Your number was ${number}.`
}

numberConverter(toPowerOfTwo, 2)
numberConverter(minusTen,14)
// Of course, this works with built-in functions too
numberConverter(Math.sqrt, 16)
// And with anonymous functions
numberConverter(
  function(number) { return number + 5 },
  -1
  )
numberConverter(numberInString, 4)
