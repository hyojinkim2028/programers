function solution(priorities, location) {
  var answer = 0
  let work = priorities
  let arr = []

  //위치 배열 만들기
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i)
  }

  while (work.length !== 0) {
    if (work[0] < Math.max(...work)) {
      work.push(work.shift())
      arr.push(arr.shift())
    } else if (work[0] === Math.max(...work)) {
      answer += 1
      work.shift()
      if (arr.shift() === location) return answer
    }
  }
  return answer
}