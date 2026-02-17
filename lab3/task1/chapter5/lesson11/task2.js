function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]

  return days[date.getDay()]
}

let newdate = new Date(2012, 0, 3) // 3 Jan 2012
alert(getWeekDay(newdate)) // should output "TU"
