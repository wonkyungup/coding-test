def solution(num1, num2):
    return (lambda x, y: 1 if int(x) == int(y) else -1)(num1, num2)

solution(2, 3) # -1
solution(11, 11) # 1
solution(7, 99) # -1