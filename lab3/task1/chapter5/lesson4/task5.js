function getMaxSubSum(arr) {
  arr.sort((a, b) => b - a)

  let sum = 0,
    maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum > maxSum) {
      maxSum = sum
    }
  }

  return maxSum
}

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3])) // 6 (take all)
