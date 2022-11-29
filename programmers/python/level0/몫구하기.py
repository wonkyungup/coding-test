import math

def solution(num1, num2):
    return (lambda x, y: math.floor(int(x)/int(y)))(num1, num2)

solution(10, 5) # 2
solution(7, 2) # 3