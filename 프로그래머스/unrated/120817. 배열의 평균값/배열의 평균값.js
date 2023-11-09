function solution(numbers) {
  let answer = 0
  for (let i of numbers) {
    answer += i
  }
  let primeNum =
    answer / numbers.length.toFixed(1) - Math.floor(answer / numbers.length)
  if (primeNum === 0 || primeNum === 0.5)
    return answer / numbers.length.toFixed(1)
    else return Math.floor(answer / numbers.length)
}
