import math

x = int(input())
count = 0

for i in range(1, int(math.sqrt(x)) + 1):
    if x % i == 0:
        count += 1  
        if i != x // i:  
            count += 1

print(count)
