function solution(phone_number) {
  const len = phone_number.length - 4
  return phone_number.replace(phone_number.slice(0, -4), '*'.repeat(len))
}