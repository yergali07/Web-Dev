function readNumber() {
  let num = +prompt("Enter a number", "")
  if (isNaN(num)) {
    return readNumber()
  } else if (num === null) {
    return null
  }
  return num
}

alert(readNumber())
