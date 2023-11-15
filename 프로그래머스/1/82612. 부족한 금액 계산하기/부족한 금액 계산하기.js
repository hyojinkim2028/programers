function solution(price, money, count) {
  let totalPay = 0

  for (let i = 1; i < count + 1; i++) {
    totalPay += price * i
  }

  let answer = money - totalPay

  let result = answer < 0 ? Math.abs(answer) : 0

  return result
}