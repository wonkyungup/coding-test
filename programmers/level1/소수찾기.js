function solution(n) {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i < Number(n ** 0.5) + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.map((element, index) => {
        if (element) {
            return index
        }
    }).filter(element => element > 0).length;
}

console.log(solution(10)) // 4
console.log(solution(5)) // 3