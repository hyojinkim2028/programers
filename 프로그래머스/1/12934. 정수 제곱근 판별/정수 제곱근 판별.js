function solution(n) {
  let sqrtNum = Math.sqrt(n)
  return Number.isInteger(sqrtNum) ? (sqrtNum + 1) ** 2 : -1
}