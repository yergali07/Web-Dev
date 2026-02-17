function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, index) => {
    if (item < a || item > b) {
      arr.splice(index, 1)
    }
  })
}

let arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4) // removed the numbers except from 1 to 4

alert(arr) // [3, 1]
