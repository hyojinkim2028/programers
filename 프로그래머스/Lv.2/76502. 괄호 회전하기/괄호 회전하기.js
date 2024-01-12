function solution(s) {
    const pair = { '}': '{', ']': '[', ')': '(' }
      const arr = s.split('')
      let result = 0
      const isValid = arr => {
        const stack = []
        for (let i = 0; i < arr.length; i++) {
          const c = arr[i]
          if (pair[c] === undefined) stack.push(c) // stack 배열에 pair[c](키값)에 대한 밸류가 없다면(즉 괄호의 짝이 없다) 스택에 값 푸쉬
          else {
            if (stack[stack.length - 1] !== pair[c]) return false
            stack.pop()
          }
        }
        if (stack.length) return false
        return true
      }
    
      for (let i = 0; i < s.length; i++) {
        if (isValid(arr)) {
            result++
        }
        arr.push(arr.shift())
      }
    
      return result
    }

console.log(solution("}]()[{"));