function unitConverter(unit) {
  const units = {
    tonne: 0.001,
    gram: 1000,
    pound: 2.205,
    ounce: 35.274
  }

  return function(kgs) {
    return units[unit] * kgs
  }
}

const poundConverter = unitConverter('pound')
const converted = poundConverter(10)
console.log(converted)
