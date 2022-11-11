function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return week[new Date(`2016-${a}-${b}`).getDay()];
}

console.log(solution(a, b)) // "TUE"