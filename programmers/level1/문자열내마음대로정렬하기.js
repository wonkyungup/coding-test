function solution(strings, n) {
    const answer = strings.map(ele => {
        const config = {
            key: ele[n],
            value: ele
        }

        return config
    })

    return answer.sort((a, b) => {
        if (a.key !== b.key) {
            if (a.key - b.key) {
                return 0
            }

            if (a.key > b.key) {
                return 1
            }

            if (a.key < b.key) {
                return  -1
            }
        }

        if (a.value < b.value) {
            return -1
        }
    }).map(ele => ele.value)
}

solution(["sun", "bed", "car"], 1) // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"], 2) // ["abcd", "abce", "cdx"]