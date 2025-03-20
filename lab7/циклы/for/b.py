a, b, c, d = map(int, input().split())

for num in range(a, b + 1):
    if num % d == c:
        print(num, end=" ")
