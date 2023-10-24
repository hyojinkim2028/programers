function solution(num_list) {
  var count = 0
  for (let i of num_list) {
    while (i > 1) {
      if (i % 2 == 0) {
        i = i / 2
        console.log(`${i}의 횟수 = ${count}`)
      } else {
        i = (i - 1) / 2
        console.log(`${i}의 횟수 = ${count}`)
      }
      console.log(`${i}의 횟수 = ${count}`)
      count++
    }
  }
  return count
}