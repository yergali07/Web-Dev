let number = prompt("Enter a number greater than 100", "")

while (number <= 100) {
    number = prompt("Enter a number greater than 100", "")
}

alert(`${number} is greater than 100`)

let num

do {
    num = prompt("Enter a number greater than 100", "")
} while (num && num <= 100)

alert(`${num} is greater than 100`)