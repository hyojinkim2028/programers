function solution(n) {
  let answer = []
  let arr = n.toString().split('').reverse()
  for (let i of arr) {
    answer.push(Number(i))
  }
  return answer
}