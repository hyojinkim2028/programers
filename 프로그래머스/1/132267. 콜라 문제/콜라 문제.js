function solution(a, b, n) {
  var answer = 0

  while (n > a - 1) {
    answer += Math.floor(n / a) * b
    n = Math.floor(n / a) * b + (n % a)
  }
  return answer
}