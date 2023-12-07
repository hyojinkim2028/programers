function solution(answers) {
  var answer = []

  const supo1 = [1, 2, 3, 4, 5]
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  const s1 = answers.filter((a, i) => a === supo1[i % supo1.length])
  const s2 = answers.filter((a, i) => a === supo2[i % supo2.length])
  const s3 = answers.filter((a, i) => a === supo3[i % supo3.length])

  const answerCountArr = [s1.length, s2.length, s3.length]
  const maxAnswer = Math.max(...answerCountArr)

  for (let i = 0; i < answerCountArr.length; i++) {
    if(answerCountArr[i] === maxAnswer)
    answer.push(i+1)
  }

  return answer
}