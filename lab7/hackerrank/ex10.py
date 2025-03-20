import re

n = int(input())

for _ in range(n):
    regex = input()
    try:
        re.compile(regex)  
        print(True)
    except re.error:
        print(False)
