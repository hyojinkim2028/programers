function solution(a, b) {
  //   let m = a - 1
  const dayOfWeek = {
    0: 'MON',
    1: 'TUE',
    2: 'WED',
    3: 'THU',
    4: 'FRI',
    5: 'SAT',
    6: 'SUN',
  }
  let day = new Date(2016, a - 1, b - 1)
  let getDay = day.getDay()
  let answer = dayOfWeek[getDay]

  return answer
}