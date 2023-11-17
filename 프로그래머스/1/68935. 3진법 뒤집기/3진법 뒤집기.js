function solution(n) {
  let answer = n.toString(3)
  
  return parseInt(answer.split('').reverse().join(''), 3)
}