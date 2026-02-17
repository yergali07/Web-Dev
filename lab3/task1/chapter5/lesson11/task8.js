function formatDate(date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  if (diff < 1000) {
    return "right now"
  }
  if (diff < 60000) {
    return `${Math.floor(diff / 1000)} sec. ago`
  }
  if (diff < 3600000) {
    return `${Math.floor(diff / 60000)} min. ago`
  }
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear().toString().slice(-2)} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`
}

console.log(formatDate(new Date(new Date() - 1))) // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))) // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))) // "5 min. ago"

console.log(formatDate(new Date(new Date() - 86400 * 1000))) // "yesterday's date like 31.12.16 20:00"
