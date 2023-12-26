function solution(s) {
  var answer = []
  let minAndMax = s.split(' ').forEach((el) => answer.push(Number(el)))
  let result = []
    const min = result.push(Math.min(...answer))
    const max = result.push(Math.max(...answer))

  return result.join(' ')
}
