function solution(number) {
  var answer = 0
  let threeMusketeers = 0

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        console.log(number[i] + number[j] + number[k])
        if (number[i] + number[j] + number[k] === 0) {
          answer += 1
        }
      }
    }
  }
  return answer
}