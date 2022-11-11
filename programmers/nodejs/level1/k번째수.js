function solution(array, commands) {
    let answer = [];
    commands.forEach((elements, index) => {
        answer.push(array.slice(elements[0] - 1, elements[1]).sort((a, b) => a - b)[elements[2] - 1]);
    })

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // [5, 6, 3]