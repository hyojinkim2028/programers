function solution(n) {
  const num = n - 1
  let result = []
  let index = 1

  while (index <= num) {
    if (num % index === 0) result.push(index)
    index++
  }

  return result[1]
}
