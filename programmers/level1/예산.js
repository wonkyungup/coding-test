function solution(d, budget) {
    let total = 0

    if (d.reduce((acc, cur) => acc + cur) === budget) return d.length
    return d.sort((a, b) => a - b).map((item, idx, arr) => {
        total += arr[idx]
        if (total > budget) {
            return null
        }
        return item
    }).filter(item => item !== null).length
}

solution([1,3,2,5,4], 9) // 3
solution([2,2,3,3], 10) // 4