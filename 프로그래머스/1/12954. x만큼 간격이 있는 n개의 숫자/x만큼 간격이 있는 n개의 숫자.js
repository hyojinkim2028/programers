function solution(x, n) {
  var answer = [];
  let count = 0

  for (let i = 1 ; i <=n ; i++) {
    answer.push(x * i)
  }
  return answer;
}