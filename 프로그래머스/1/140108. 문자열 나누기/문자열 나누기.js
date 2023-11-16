function solution(s) {
  var answer = ''
  let countTrue = 1
  let countFalse = 0
  let char = s[0]
  let result = 0

  for (let i = 1; i < s.length; i++) {
    if (char === s[i]) {
      countTrue++
    } else countFalse++
    answer += s[i]
    if (countTrue === countFalse) {
      char = s[i + 1]
      answer += '-'
      result++
    }
  }
  return answer.substr(-1) !== "-" ? result + 1 : result
}