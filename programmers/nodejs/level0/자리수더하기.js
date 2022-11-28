const solution = (n) => [...n.toString()].map(item => parseInt(item, 10)).reduce((acc, cur) => acc + cur)

console.log(solution(1234)) // 10
console.log(solution(930211)) // 16