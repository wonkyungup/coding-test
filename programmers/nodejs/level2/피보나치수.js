function solution(n) {
    let answer = new Array(n + 1).fill(null).map((value, index) => index < 2 ? index : null)
    answer.forEach((value, index, list) => {
        if (index > 1) {
            list[index] = (list[index -2] + list[index -1]) % 1234567
        }
    })

    return answer[n]
}

solution(3) // 2
solution(5) // 5