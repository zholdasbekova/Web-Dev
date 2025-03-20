def sorta_sum(a, b):
    total = a + b
    return 20 if 10 <= total <= 19 else total

print(sorta_sum(3, 4))   # 7
print(sorta_sum(9, 4))   # 20
print(sorta_sum(10, 11)) # 21
