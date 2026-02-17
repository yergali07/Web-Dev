function sumInput() {
  let values = []
  while (true) {
    let value = prompt("Enter a number", "")
    if (value === null || value === "" || !isFinite(value)) break
    values.push(+value)
  }

  let sum = 0
  for (let value of values) {
    sum += value
  }
  return sum
}

alert(sumInput())
