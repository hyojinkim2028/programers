function solution(k, m, score) {
  var answer = 0;
  // score 내림차순 정렬
  const f_score = score.sort((a, b) => b - a);
  const result = [];

  // 분리한 배열 배열별 최저값을 구해 answer에 더해줌
  for (let i = 0; i < f_score.length; i += m) {
    let box = f_score.slice(i, i + m);
    if (box.length < m) break;
    answer += m * Math.min(...box);
  }

  return answer;
}