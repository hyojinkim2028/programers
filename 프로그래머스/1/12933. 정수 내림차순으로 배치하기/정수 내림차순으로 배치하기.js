function solution(n) {
  var answer = n.toString().split('')
  answer = answer
    .sort((a, b) => a - b)
    .reverse()
    .join('')

  return Number(answer)
}
