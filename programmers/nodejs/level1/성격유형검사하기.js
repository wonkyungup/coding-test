function solution(survey, choices) {
    const category = {
        R: 'R', T: 'T',
        C: 'C', F: 'F',
        J: 'J', M: 'M',
        A: 'A', N: 'N'
    }
    const index = {
        R: 0, T: 0, result1: 0,
        C: 0, F: 0, result2: 0,
        J: 0, M: 0, result3: 0,
        A: 0, N: 0, result4: 0
    }
    let arr = survey.map(value => [...value])

    for (let i = 0; i< choices.length; i++) {
        switch (choices[i]) {
            case 1:
                arr[i][0] += 3
                break
            case 2:
                arr[i][0] += 2
                break
            case 3:
                arr[i][0] += 1
                break
            case 5:
                arr[i][1] += 1
                break
            case 6:
                arr[i][1] += 2
                break
            case 7:
                arr[i][1] += 3
                break
        }
    }

    arr = arr.reduce((acc, cur) => acc.concat(cur)).filter(value => value.length > 1).map(value => {
        const arr = [...value]
        return {
            index: arr[0],
            count: parseInt(arr[1])
        }
    })

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].index) {
            case category.T:
                index.T += arr[i].count
                break
            case category.R:
                index.R += arr[i].count
                break
            case category.F:
                index.F += arr[i].count
                break
            case category.C:
                index.C += arr[i].count
                break
            case category.M:
                index.M += arr[i].count
                break
            case category.J:
                index.J += arr[i].count
                break
            case category.N:
                index.N += arr[i].count
                break
            case category.A:
                index.A += arr[i].count
        }
    }

    index.result1 = (index.R === index.T || index.R > index.T) ? category.R : category.T
    index.result2 = (index.C === index.F || index.C > index.F) ? category.C : category.F
    index.result3 = (index.J === index.M || index.J > index.M) ? category.J : category.M
    index.result4 = (index.A === index.N || index.A > index.N) ? category.A : category.N

    return index.result1 + index.result2 + index.result3 + index.result4
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]) // TCMA
// solution(["TR", "RT", "TR"], [7, 1, 3]) // RCJA