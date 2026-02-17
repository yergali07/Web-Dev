function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?")
}

// is the same as
// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?")
// }