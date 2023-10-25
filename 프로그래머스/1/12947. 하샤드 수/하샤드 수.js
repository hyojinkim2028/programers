function solution(x) {
  var answer = 0

  let num = x.toString().split('')
  for (let i of num) {
    answer += Number(i)
  }
  x % answer == 0 ? (answer = true) : (answer = false)

  return answer
}