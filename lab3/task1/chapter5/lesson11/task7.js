function getSecondsToTomorrow() {
  const now = new Date()
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return Math.floor((tomorrow.getTime() - now.getTime()) / 1000)
}

alert(getSecondsToTomorrow())