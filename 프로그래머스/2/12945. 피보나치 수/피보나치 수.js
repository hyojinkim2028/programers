function solution(n) {
    let fArr = [0, 1]
    var answer = 0
  
    for (let i = 1; i < n; i++) {
      fArr.push((fArr[i] + fArr[i - 1])% 1234567)
      answer = fArr[fArr.length - 1] 
    }
    return answer
  }