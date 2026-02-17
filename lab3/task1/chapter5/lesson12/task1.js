let user = {
  name: "John Smith",
  age: 35,
}

let json = JSON.stringify(user)

let anotherUser = JSON.parse(json)

console.log(anotherUser)
