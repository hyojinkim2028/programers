function solution(my_string) {
  const newStr = new Set(my_string)
  return [...newStr].join('')
}