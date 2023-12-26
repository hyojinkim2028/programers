// function solution(arr1, arr2) {
//     var answer = [];
//     // arr1 0,1,2 돌기 
//     for(let i = 0 ; i< arr1.length ; i++) {
//         let sums=[] ;
//         for(let j = 0 ; j< arr1[i].length; j++) {
//             let sum = 0
//             for(let k = 0 ; k < arr1[i].length ; k++) {

//                 sum += arr1[i][k]*arr2[k][j]
//             }
//             sums.push(sum)
//         }
//         answer.push(sums)
//     }
//     return answer;
// }
function solution(arr1, arr2) {
  var answer = [];
  for (let j = 0; j < arr2[0].length; j++) {
    for (let i = 0; i < arr1.length; i++) {
      let total = 0;
      arr1[i].forEach((e, idx) => {
        total += e * arr2[idx][j];
      });
      if (answer[i]) answer[i].push(total);
      else answer.push([total]);
    }
  }

  return answer;
}