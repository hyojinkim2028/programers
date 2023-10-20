function solution(s) {
  var answer = ''
  let charNum = Math.floor(s.length / 2)
  console.log(charNum)

  if (s.length % 2 === 0) {
    return s.slice(charNum - 1, charNum + 1)
  } else {
    answer = s[charNum]
  }
  return answer
}