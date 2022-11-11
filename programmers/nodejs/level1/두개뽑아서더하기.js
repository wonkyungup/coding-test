function solution(numbers) {
    let answer = null
    for (let i = 0; i < numbers.length; i++) {
        const frontValue = numbers[i]
        for (let j = i + 1; j < numbers.length; j++) {
            const backValue = numbers[j]
            if (!answer) {
                answer = Array.from(Array(numbers.length), () => Array(numbers.length).fill(null))
            }

            answer[i][j] = frontValue + backValue
        }
    }

    return [...new Set(answer.reduce((acc, cur) => acc.concat(cur)).filter(value => value !== null))].sort((a, b) => a - b)
}

console.log(solution([2,1,3,4,1])) // [2,3,4,5,6,7]
console.log(solution([5,0,2,7]))	// [2,5,7,9,12]