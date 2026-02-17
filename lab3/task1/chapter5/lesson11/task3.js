function getLocalDay(date) {
  let day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

let anotherdate = new Date(2012, 0, 3) // 3 Jan 2012
alert(getLocalDay(anotherdate)) // tuesday, should show 2
