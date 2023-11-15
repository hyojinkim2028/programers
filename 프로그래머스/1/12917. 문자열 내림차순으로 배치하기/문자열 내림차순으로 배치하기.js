function solution(s) {
  var answer = ''
  let char = []

  for (let c of s) {
    char.push(c.charCodeAt())
  }
  char.sort((a, b) => a - b).reverse()

  for (let c of char) {
    // answer.push(c.fromCharCode())
    answer += String.fromCodePoint(c)
  }

  return answer
}