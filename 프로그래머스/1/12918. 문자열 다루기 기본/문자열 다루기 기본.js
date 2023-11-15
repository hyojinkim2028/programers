function solution(s) {
  let answer = []
  if (s.length === 4 || s.length === 6) {
    for (let c of s) {
      answer.push(Number(c))
    }
  } else return false

  return answer.includes(NaN) ? false : true
}