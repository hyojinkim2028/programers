function solution(str, n) {
  var answer = ''
  let result = []
  return str
    .split('')
    .map((e) => {
      if (e == ' ') return e

      return e.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(e.charCodeAt() + n - 26)
        : String.fromCharCode(e.charCodeAt() + n)
    })
    .join('')
}