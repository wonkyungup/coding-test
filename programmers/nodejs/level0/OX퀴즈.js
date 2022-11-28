function solution(quiz) {
    const answer = []
    quiz.map(item => item.replace(/\s\s+/g, '').split('=')).forEach(element => {
          if (eval(element[0]) === parseInt(element[1], 10)) answer.push('O')
          else answer.push('X')
        })

    return answer
}

// solution(["3 - 4 = -3", "5 + 6 = 11"]) // 	["X", "O"]
// solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	) // ["O", "O", "X", "O"]