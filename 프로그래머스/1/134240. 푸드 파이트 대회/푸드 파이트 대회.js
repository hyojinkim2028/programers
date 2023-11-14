function solution(food) {
  var answer = [0]

  for (let i = food.length; i > 0; i--) {
    let a = i.toString().repeat(Math.floor(food[i] / 2))
    answer.unshift(a)
    answer.push(a)
  }

  return answer.join('')
}