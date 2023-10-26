function solution(s) {
  var answer = ''
  let charNum = Math.floor(s.length / 2)

  if (s.length % 2 === 0) {
    return s.slice(charNum - 1, charNum+1)
  } else {
    answer = s[charNum]
  }
  return answer
}
console.log(solution('qwer'))
