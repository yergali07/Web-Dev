let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
]

let readMessages = new WeakMap()

readMessages.set(messages[0], new Date(2026, 2, 18))