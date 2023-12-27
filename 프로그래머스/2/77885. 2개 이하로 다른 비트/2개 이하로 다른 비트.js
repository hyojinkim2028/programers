function solution(numbers) {
  var answer = []
  for (let i = 0; i < numbers.length; i++) {
    let strNum = '0' + numbers[i].toString(2)
    if (numbers[i] % 2 === 0) answer.push(numbers[i] + 1)
    else {
      let idx = strNum.lastIndexOf('01')
      let newNum =
        strNum.substring(0, idx) +
        '10' +
        strNum.substring(idx + 2, strNum.length)
      answer.push(parseInt(newNum, 2))
    }
  }
  return answer
}