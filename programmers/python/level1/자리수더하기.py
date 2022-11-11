from functools import reduce

def solution(n):
    return int(reduce(lambda acc, cur: int(acc) + int(cur), list(str(n))))

solution(123) # 6
solution(987) # 24