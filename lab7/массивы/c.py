A = list(map(int, input().split()))
print(sum(1 for x in A if x > 0))