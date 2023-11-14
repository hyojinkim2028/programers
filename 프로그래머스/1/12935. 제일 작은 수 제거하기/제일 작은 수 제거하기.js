function solution(arr) {
  var answer = arr
  let minNum = Math.min(...arr)
  let minIdx = arr.indexOf(minNum)
  answer.length > 1 ? answer.splice(minIdx, 1) : answer = [-1]
  return answer
}