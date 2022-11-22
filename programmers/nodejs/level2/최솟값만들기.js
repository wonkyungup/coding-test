function solution(A,B){
    let arrA = A.sort((a, b) => a - b )
    let arrB = B.sort((a, b) => b - a )

    return new Array((arrA.length + arrB.length) / 2)
        .fill(null)
        .map((value, index) => arrA[index] * arrB[index])
        .reduce((acc, cur) => acc + cur)
}

solution([1, 4, 2], [5, 4, 4]) // 29
solution([1,2], [3,4]) // 10