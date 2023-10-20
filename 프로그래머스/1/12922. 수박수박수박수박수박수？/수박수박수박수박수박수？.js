function solution(n) {
  var answer = ''
  while (answer.length < n) {
    let i = answer.length
    if (answer.length % 2 === 0) {
      answer += '수'
    } else answer += '박'
  }
  return answer
}