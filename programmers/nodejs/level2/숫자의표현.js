function solution(n) {
    const answer = { total: 0, count: 0 }
    let arr = new Array(n).fill(null).map((value, index) => index + 1)

    while(arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            answer.total += arr[i]
    
            if (answer.total === n) {
                answer.count += 1
            }
    
            if (answer.total > n) {
                answer.total = 0
                arr.shift()
                break
            }
        }
    }

    return answer.count
}

console.log(solution(15)) // 4