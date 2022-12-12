function solution(n, k, enemy) {
    let soldier = n
    let superArm = k

    return enemy
        .map(value => {
            soldier = soldier - value
            if (soldier > 0) return 'x'
            if (superArm !== 0) {
                superArm--
                return 'x'
            }

            return value
        })
        .filter(value => value === 'x')
        .length
}

console.log(solution(7, 3, [4,2,4,5,3,3,1])) // result = 5
solution(2, 4, [3,3,3,3]) // result = 4

/*
    병사 = 7
    무적권 = 3
    적 = [4,2,4,5,3,3,1]

    1. 7 - 4 = 3, 3, [x, 2, 4, 5, 3, 3, 1]
    2. 3 - 2 = 1, 3, [x, x, 4, 5, 3, 3, 1]
    3. 1 - 4 = -3?, 2, [x, x, x, 5, 3, 3, 1]
    4. 1 - 5 = -4?, 1, [x, x, x, x, 3, 3, 1]
    5. 1 - 3 = -2?, 0, [x, x, x, x, x, 3, 1]
    6. x => 5, result 5
*/