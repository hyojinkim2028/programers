function solution(babbling) {
  let answer = 0

  let posible = ['aya', 'ye', 'woo', 'ma']

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i]
    for (let j = 0; j < posible.length; j++) {
      if (babble.includes(posible[j].repeat(2))) {
        break
      }

      if (babble.includes(posible[j])) {
        if (babble.split(posible[j])) {
          babble = babble.split(posible[j]).join(' ')
        }
      }
    }
    if (babble.split(' ').join('').length === 0) answer++
  }
  return answer
}