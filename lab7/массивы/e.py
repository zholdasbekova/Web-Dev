A = list(map(int, input().split()))
for i in range(len(A) - 1):
    if A[i] * A[i + 1] > 0:
        print(A[i], A[i + 1])
        break