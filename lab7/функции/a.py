def can_obtain(n):
    if n == 1:
        return "YES"
    if n < 1:
        return "NO"
    return can_obtain(n - 3) if n % 3 == 1 else can_obtain(n - 5)

N = int(input())
print(can_obtain(N))