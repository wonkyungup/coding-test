function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase()
    let answer = ''

    for (let i = 0; i< s.length; i++) {
        if (s[i] === ' ') {
            answer += ' '
            continue
        }

        const arr = upper.search(s[i]) !== -1 ? upper : lower
        let index = arr.indexOf(s[i]) + n
        if (index >= arr.length) {
            index -= arr.length
        }
        answer += arr[index]
    }

    return answer
}

solution("AB", 1) // "BC"
solution("z", 1) // "a"
solution("a B z", 4) // "e F d"