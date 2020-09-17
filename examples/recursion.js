// Run this script with "node <filename> <number>"

function countDown(number, countDownText) {
  if (number === 0) {
    return countDownText + 'Ready to go!'
  } else {
    return countDown(number - 1, countDownText + `${number}\n`)
  }
}

function main() {
  // The first two entries in argv are path to the Node.js executable and the script file name.
  const number = process.argv[2]
  const message = countDown(number, '')
  console.log(message)
}

main()
