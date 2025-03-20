a, b = map(int, input().split())

for num in range(a, b + 1):
    if num % 2 == 0:
        print(num, end=" ")
