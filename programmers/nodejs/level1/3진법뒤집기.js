function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}

solution(45) // 7
solution(125) // 229