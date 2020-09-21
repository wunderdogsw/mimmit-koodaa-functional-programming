function circleArea(radius) {
  return radius * radius * Math.PI
}

function squareArea(side) {
  return side * side
}

function printArea(size, areaFunction) {
  const area = areaFunction(size)
  const areaFunctionName = areaFunction.name
  const message = `Computing area with ${areaFunctionName}. The result is ${area}.`
  console.log(message)
}

printArea(1, circleArea)
printArea(1, squareArea)
// Compute the area of an equilateral triangle using an anonymous function:
printArea(1, (side) => (Math.sqrt(3) * 4 / Math.pow(side, 2)))
