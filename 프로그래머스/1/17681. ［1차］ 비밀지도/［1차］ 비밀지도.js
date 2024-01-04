function solution(n, arr1, arr2) {
    var answer = [];
    let a1;
    for (let i = 0 ; i < arr1.length; i++) {
        let check = ''
        a1 = String(arr1[i].toString(2).padStart(n,'0'))
        a2 = String(arr2[i].toString(2).padStart(n,'0'))
        for(let j = 0 ; j < a1.length ; j++) {
            if(a1[j] === '1' || a2[j] === '1') check += '#'
            else check += " "
        }
        answer.push(check)
    }

    return answer;
}