N = int(input())  
count_zeros = sum(1 for _ in range(N) if int(input()) == 0)  
print(count_zeros)  