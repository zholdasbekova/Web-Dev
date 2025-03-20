A = list(map(int, input().split()))
print(*[A[i] for i in range(1, len(A)) if A[i] > A[i - 1]])
