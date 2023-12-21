function solution(s) {
  let countOpen = 0

  for (let i of s.split('')) {
    if (i === '(') countOpen++
    if (i === ')') countOpen--
    if (countOpen < 0) return false
  }
  if (countOpen !== 0) return false

  return true
}