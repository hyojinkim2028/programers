function solution(t, p) {
  var answer = 0
  for (let i = 0; i < t.length; i++) {
    let piece = t.substr(i, p.length)
    if(piece.length < p.length) break;
    if(Number(piece) <= Number(p)) answer++
  }
  return answer
}
