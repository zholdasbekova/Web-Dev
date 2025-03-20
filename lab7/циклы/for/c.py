import math

a, b = map(int, input().split())

for num in range(a, b + 1):
    if math.isqrt(num) ** 2 == num:
        print(num, end=" ")