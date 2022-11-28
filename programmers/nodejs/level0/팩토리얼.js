function solution(n) {
    // 0 < n ≤ 3,628,800
    const arr = new Array(10).fill(null).map((item, index) => parseInt(index + 1, 10))
    let total = 1
    let answer = 0

    for (let idx = 0; idx < arr.length; idx++) {
        total *= arr[idx]

        if (total <= n) {
            answer += 1
        }
    }

    return answer
}

// solution(3628800) // 10
// solution(7) // 3