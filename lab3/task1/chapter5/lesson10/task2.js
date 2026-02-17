function topSalary(salaries) {
  return Object.entries(salaries).sort((a, b) => b[1] - a[1])[0]?.[0] || null
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

alert(topSalary(salaries)) // Pete
