// Run this script with "node <filename> <number>"

function countUp(currentNumber, maxNumber, countDownText) {
  if (currentNumber === maxNumber) {
    return countDownText + 'Ready to go!'
  } else {
    return countUp(currentNumber + 1, maxNumber,countDownText + `${currentNumber}\n`)
  }
}

function main() {
  // The first two entries in argv are path to the Node.js executable and the script file name.
  // The values are strings, so converting it to a number first.
  const number = parseInt(process.argv[2], 10)
  const message = countUp(0, number, '')
  console.log(message)
}

main()
