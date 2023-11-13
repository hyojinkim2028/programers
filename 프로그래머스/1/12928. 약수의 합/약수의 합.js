function solution(n) {
  let result = [n]
  let index = 1
  let sum = 0

  while (index <= n / 2) {
    if (n % index === 0) result.push(index)
    index++
  }

  for (let i of result) {
    sum += i
  }
  return sum
}