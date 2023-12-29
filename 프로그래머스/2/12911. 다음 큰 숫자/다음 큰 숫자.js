function solution(n) {
    var answer = 0;

    let count1 = n.toString(2).toString().split('').filter(v => v === '1').length

    let count2 = 0;
    while(count1 !== count2) {
        answer = ++n
        count2 = n.toString(2).toString().split('').filter(v => v === '1').length
    }
    return answer;
}