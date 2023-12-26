function solution(A,B){
    var answer = 0;
//a 오름차순 정렬
const a = A.sort((a,b) => a-b)

//b 내림차순 정렬
const b = B.sort((a,b) => b-a)


for(let i = 0 ; i< A.length ; i++) {
    answer+=(a[i]*b[i]);
}
    return answer;
}