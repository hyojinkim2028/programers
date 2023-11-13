function solution(arr, divisor) {
  var answer = []

  for (let i of arr) {
    if (i % divisor === 0 && i / divisor >= 1) answer.push(i)
  }

  if (answer.length >= 1) {
    return answer.sort((a, b) => a - b)
  } else return [-1]
}
