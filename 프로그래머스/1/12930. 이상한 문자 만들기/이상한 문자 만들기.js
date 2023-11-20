function solution(s) {
  let str = s.split(' ')
  str = str.map((s) =>
    s
      .split('')
      .map((c, index) => (index % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join('')
  )
  console.log(str)

  return str.join(' ')
}