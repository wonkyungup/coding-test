function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((element, index) => { return  element !== completion[index] });
}

solution(["leo", "kiki", "eden"],["eden", "kiki"]) // "leo"