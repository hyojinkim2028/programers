
function solution(s) {
    let answer = []
    let x = s.split(' ').map((el) => answer.push(el))
    let newStr = []

    for(let i = 0 ; i< answer.length; i++) {
        let result = []
        for(let j = 0 ; j< answer[i].length ; j++) {
            j===0 ? result.push(answer[i][0].toUpperCase()) : result.push(answer[i][j].toLowerCase())
        }
        result = result.join('')
        newStr.push(result)
    }
    return newStr.join(' ');
    // (el[0].charCodeAt >= 97 && el[0].charCodeAt <= 122)
    // el.replace(el[0],el[0].toUpperCase())
}
