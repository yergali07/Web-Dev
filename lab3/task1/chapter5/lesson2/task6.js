function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min // min and max have the same probability
}

alert(randomInteger(1, 5)) // 1
alert(randomInteger(1, 5)) // 3
alert(randomInteger(1, 5)) // 5
