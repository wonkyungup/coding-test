function solution(numbers, hand) {
    const pos = {
        1: [0, 0], 2: [1, 0], 3: [2, 0],
        4: [0, 1], 5: [1, 1], 6: [2, 1],
        7: [0, 2], 8: [1, 2], 9: [2, 2],
        '*': [0, 3], 0: [1, 3], '#': [2, 3]
    }

    const user = {
        left: pos['*'],
        right: pos['#'],
        hands: ''
    }

    for (let i = 0; i < numbers.length; i++) {
        switch (numbers[i]) {
            case 1:
            case 4:
            case 7:
            case '*':
                user.left = pos[numbers[i]]
                user.hands += 'L'
                break
            case 3:
            case 6:
            case 9:
            case '#':
                user.right = pos[numbers[i]]
                user.hands += 'R'
                break
            case 2:
            case 5:
            case 8:
            case 0:
                const left = Math.abs(pos[numbers[i]][0] - user.left[0]) + Math.abs(pos[numbers[i]][1] - user.left[1])
                const right = Math.abs(pos[numbers[i]][0] - user.right[0]) + Math.abs(pos[numbers[i]][1] - user.right[1])

                if (left < right) {
                    user.left = pos[numbers[i]]
                    user.hands += 'L'
                }

                if (right < left) {
                    user.right = pos[numbers[i]]
                    user.hands += 'R'
                }

                if (left === right) {
                    switch (hand) {
                        case 'left':
                            user.left = pos[numbers[i]]
                            user.hands += 'L'
                            break
                        case 'right':
                            user.right = pos[numbers[i]]
                            user.hands += 'R'
                            break
                    }
                }
        }
    }

    return user.hands
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")) // "LLRLLRLLRL"