function getDateAgo(date, days) {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000)
}

let andAnotherDate = new Date(2015, 0, 2)

alert(getDateAgo(andAnotherDate, 1)) // 1, (1 Jan 2015)
alert(getDateAgo(andAnotherDate, 2)) // 31, (31 Dec 2014)
alert(getDateAgo(andAnotherDate, 365)) // 2, (2 Jan 2014)
