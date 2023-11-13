function solution(n) {
  var answer = 0
  let num = n.toString()

  for (let i of num) {
    answer = answer + Number(i)
  }
  return answer
}