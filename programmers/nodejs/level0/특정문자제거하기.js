const solution = (my_string, letter) => [...my_string].filter(char => char !== letter).join('')

solution("abcdef", "f") //"abcde"
solution("BCBdbe", "B") // "Cdbe"