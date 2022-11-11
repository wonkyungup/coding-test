function solution(s) {
    const answer = { attempt: 0, totalZero: 0, binary: '' }
    const convert = (numbers) => {
        const arr = [...numbers]
        let length = arr.length

        if (arr.includes('0')) {
            length = arr.filter(value => {
                if (value === '0') answer.totalZero++
                return value !== '0'
            }).join('').length
        }

        answer.binary = length.toString(2)
        answer.attempt++

        if (answer.binary === '1') {
            return
        }

        convert(answer.binary)
    }

    convert(s.toString())
    return [parseInt(answer.attempt), parseInt(answer.totalZero)]
}

console.log(solution('110010101001')) // [3,8]
console.log(solution('01110')) // [3,3]
console.log(solution('1111111'))// [4,1]