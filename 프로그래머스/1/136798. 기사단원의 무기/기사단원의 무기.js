function solution(number, limit, power) {

  let count = 0
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (i % j === 0) {
        count++
      }
    }
  }

  return count
}