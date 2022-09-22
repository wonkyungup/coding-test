/*
s	                        return
"3people unFollowed me"	    "3people Unfollowed Me"
"for the last week"	        "For The Last Week"
*/

function solution(s) {
    const arrString = s.split(' ');
    if (arrString.length === 1) {
        return [...s].map((str, idx) => idx === 0 ? str.toUpperCase() : str.toLowerCase()).join('');
    }

    for (let i = 0; i < arrString.length; i++) {
        const string = [...arrString[i]].map((str, idx) => idx === 0 ? str.toUpperCase() : str.toLowerCase()).join('');
        if (string.length > 0) {
            arrString.splice(i, 1, string);
        }
    }

    return arrString.join(' ');
}

console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))