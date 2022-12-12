function solution(n) {
    const arr = (num) => {
        return [...num.toString(2)].filter(value => value !== '0')
    }

    let answer = 0
    let next = n + 1

    while (true) {
        if (arr(n).length === arr(next++).length) {
            answer = next - 1
            break
        }
    }

    return answer
}

solution(78) // 83
solution(15) // 23