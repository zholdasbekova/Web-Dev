A = list(map(int, input().split()))
print(*[x for x in A if x % 2 == 0])