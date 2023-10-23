function solution(n) {
  let answer = 0
  let type = [...new Set(n)]

  n.length / 2 >= type.length
    ? (answer = type.length)
    : (answer = Math.floor(n.length / 2))

  return answer
}