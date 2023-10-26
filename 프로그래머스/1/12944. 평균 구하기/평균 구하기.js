function solution(arr) {
  var answer = 0

  arr.reduce((a, b) => {
    answer += b
  }, 0)
  return answer / arr.length
}
