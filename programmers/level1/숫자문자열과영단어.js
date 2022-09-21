function solution(s) {
    const STR_USER_NAME = 'name';
    const user = new Map();
    const getStringToNumber = (string) => {
        switch (string) {
            case 'zero': return '0';
            case 'one': return '1';
            case 'two': return '2';
            case 'three': return '3';
            case 'four': return '4';
            case 'five': return '5';
            case 'six': return '6';
            case 'seven': return '7';
            case 'eight': return '8';
            case 'nine': return '9';1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5
            default: break;
        }
    }

    user.set(STR_USER_NAME, s.split(/(zero|one|two|three|four|five|six|seven|eight|nine)/));
    user.get(STR_USER_NAME).forEach((item, index) => {
        if (item && !Number(item)) {
            user.get(STR_USER_NAME).splice(index, 1 , getStringToNumber(item));
        }
    });

    return Number(user.get(STR_USER_NAME).join(''));
}

solution("one4seveneight");
