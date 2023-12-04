function solution(k, score) {
  var answer = [];
  let kArr = [];
  // score ->  반복문 돌리기
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      kArr.push(score[i]);
    }
    if (Math.min(...kArr) < score[i]) {
      kArr.pop();
      kArr.push(score[i]);
      kArr.sort((a, b) => b - a);
    }
    answer.push(Math.min(...kArr));
  }

  return answer;
}
