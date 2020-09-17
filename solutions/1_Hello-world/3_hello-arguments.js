const hello = (name) => {
  console.log(`Hello ${name}!`)
}

const helloFromCommandLine = () => {
  // The first two entries in argv are the path to the Node.js executable and the script file name.
  const name = process.argv[2]
  hello(name)
}

helloFromCommandLine()
